import { EstoquePaes } from './../model/estoquePaes';
import { Request, Response } from 'express';
import { VendaPaesService } from '../service/vendaService';
import { VendaPaes } from '../model/vendaPaes';
import { ItemVenda } from '../model/itemVenda';
import { EstoquePaesRepository } from '../repository/estoquePaesRepository';

const service = new VendaPaesService();

export function createVenda(req: Request, res: Response) {
    const estoquePaesRepository = new EstoquePaesRepository();

    try {
        const { cpfClient, itens } = req.body;
        let totalValue = 0;
        
        itens.forEach((item: any) => {
            const { estoquePaesID, quantity } = item;
            if (!estoquePaesRepository.verifyEstoqueAvailable(estoquePaesID, quantity)){
                throw new Error("Estoque insuficiente para a compra.");
            }
        });

        itens.forEach((item: any) => {
            totalValue += estoquePaesRepository.updateEstoqueVenda(item.estoquePaesID, item.quantity);
        });
        const venda = new VendaPaes(cpfClient, totalValue, itens);

        service.create(venda);
        res.status(201).json(
            {
                mensagem: "Venda criada"
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function getAllVenda(req: Request, res: Response) {
    try {
        const vendas = service.getAllVenda();
        res.status(200).json(vendas);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

