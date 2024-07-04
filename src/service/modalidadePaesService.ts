import { ModalidadePaes } from './../model/modalidadePaes';
import { ModalidadesPaesRepository } from './../repository/modalidadePaesRepository';
import { globalData } from '../global/global'; 


export class ModalidadePaesService {
    modalidadesPaesRepository: ModalidadesPaesRepository = new ModalidadesPaesRepository;

    create(modalidade: ModalidadePaes): ModalidadePaes {
        const { name, isVegan } = modalidade;
        if (!name || null || !isVegan == null) {
            throw new Error("Informações incompletas");
        }
        const newModalidade = new ModalidadePaes(name, isVegan);

        this.modalidadesPaesRepository.add(newModalidade);

        return newModalidade;
    }

    getAllModalidades():ModalidadePaes[]{
        return this.modalidadesPaesRepository.getModalidades();
    }

    getModalidadeById(id:number): ModalidadePaes | undefined{
        return this.modalidadesPaesRepository.getModalidadeById(id);
    }

    updateModalidade(modalidade: ModalidadePaes) {
        const searchedModalidade = this.getModalidadeById(modalidade.id);

        if(!searchedModalidade){
            throw new Error("Modalidade não encontrada");
        }

        searchedModalidade.name = modalidade.name;
        searchedModalidade.isVegan = modalidade.isVegan;

        this.modalidadesPaesRepository.update(searchedModalidade);

        return searchedModalidade;
    }

    deleteModalidade(id:number) {
        return this.modalidadesPaesRepository.delete(id);
    }
}