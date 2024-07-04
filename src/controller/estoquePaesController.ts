import { Request, Response } from 'express';
import { EstoquePaesService } from '../service/estoquePaesService';
import { EstoquePaes } from '../model/estoquePaes';

const service = new EstoquePaesService();

export function createEstoque(req: Request, res: Response) {
    try {
        const { modalidadeID, quantity, price } = req.body;
        const estoque = new EstoquePaes(modalidadeID, quantity, price);

        service.create(estoque);
        res.status(201).json(
            {
                mensagem: "Estoque criado"
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function getAllEstoque(req: Request, res: Response) {
    try {
        const estoques = service.getAllEstoque();
        res.status(200).json(estoques);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function getEstoqueById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const estoque = service.getEstoqueById(id);
        if (estoque) {
            res.status(200).json({
                mensagem: "Item encontrado com sucesso",
                estoque: estoque
            });

        } else {
            res.status(404).json({ mensagem: "Item não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function updateEstoque(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const { modalidadeID, quantity, price } = req.body;

        const updatedEstoque = new EstoquePaes(modalidadeID, quantity, price);
        updatedEstoque.id = id;

        const result = service.updateEstoque(updatedEstoque);

        res.status(200).json({
            mensagem: "Item atualizado com sucesso",
            estoque: result
        });
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
}

export function deleteEstoque(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const result = service.deleteEstoque(id);

        res.status(200).json({
            mensagem: "Item deletado com sucesso",
            estoque: result
        });

    } catch(error:any) {
        res.status(400).json({message: error.message});
    }
}
