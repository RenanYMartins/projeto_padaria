import { Request, Response } from 'express';
import { VendaPaesService } from '../service/vendaService';
import { VendaPaes } from '../model/vendaPaes';
import { ItemVenda } from '../model/itemVenda';
import { EstoquePaesRepository } from '../repository/estoquePaesRepository';
import { ModalidadePaesService } from '../service/modalidadePaesService';
import { ModalidadesPaesRepository } from '../repository/modalidadePaesRepository';

const service = new VendaPaesService();
const modalidadeService = new ModalidadePaesService();

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

export function getVendaById(req: Request, res: Response) {
    try {
        const estoquePaesRepository = new EstoquePaesRepository();
        const modalidadePaesRepository = new ModalidadesPaesRepository();
        const id = Number(req.params.id)
        const venda = service.getVendaById(id);
        
        const itensComNome = venda?.itens.map(item => {
            const estoque = estoquePaesRepository.getEstoqueById(item.estoquePaesID);
            const modalidade = modalidadePaesRepository.getModalidadeById(estoque?.modalidadeID ?? 0);
            console.log(modalidade, item);
            return {
                ...item,
                nameItem: modalidade?.name || 'Nome do item não encontrado'
            };
        });

        if (venda) {
            res.status(200).json({
                mensagem: "Venda encontrada com sucesso",
                venda: venda
            });

        } else {
            res.status(404).json({ mensagem: "Venda não encontrada." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

