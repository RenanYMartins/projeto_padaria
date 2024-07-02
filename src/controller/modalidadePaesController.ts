import { Request, Response } from 'express';
import { ModalidadePaesService } from '../service/modalidadePaesService';
import { ModalidadePaes } from '../model/modalidadePaes';

const service = new ModalidadePaesService();

export function createModalidade(req: Request, res: Response) {
    try {
        const { name, isVegan } = req.body;
        const modalidade = new ModalidadePaes(name, isVegan);

        service.create(modalidade);
        res.status(201).json(
            {
                mensagem: "Modalidade criada"
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export function filterModalidades(req: Request, res: Response) {
    try {
        const modalidades = service.getAllModalidades();
        res.status(200).json(modalidades);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function filterModalidadeById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const modalidade = service.filterModalidadeById(id);
        if (modalidade) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso",
                modalidade: modalidade
            });

        } else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function updateModalidade(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const { name, isVegan } = req.body;

        const updatedModalidade = new ModalidadePaes(name, isVegan);
        updatedModalidade.id = id;

        const result = service.updateModalidade(updatedModalidade);

        res.status(200).json({
            mensagem: "Modalidade atualizada com sucesso",
            modalidade: result
        });
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
}

export function deleteModalidade(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const result = service.deleteModalidade(id);

        res.status(200).json({
            mensagem: "Modalidade deletada com sucesso",
            modalidade: result
        });

    } catch(error:any) {
        res.status(400).json({message: error.message});
    }
}
