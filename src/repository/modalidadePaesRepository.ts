import { ModalidadePaes } from "../model/modalidadePaes";
import { globalData } from "../global/global";

export class ModalidadesPaesRepository{
    add(modalidade: ModalidadePaes){
       globalData.modalidadesList.push(modalidade);
    }

    getModalidades():ModalidadePaes[]{
        return globalData.modalidadesList;
    }
    
    getModalidadeById(id: number): ModalidadePaes | undefined {
        return globalData.modalidadesList.find(modalidade => modalidade.id === id);
    }

    update(modalidade: ModalidadePaes): void {
        const index = globalData.modalidadesList.findIndex(modalidade => modalidade.id === modalidade.id);

        if (index === -1) {
            throw new Error("Modalidade não encontrada");
        }

        // Atualiza os dados da modalidade na lista global
        globalData.modalidadesList[index] = modalidade;
    }

    delete(id:number): void {
        const index = globalData.modalidadesList.findIndex(modalidade => modalidade.id === id);

        if (index === -1) {
            throw new Error("Modalidade não encontrada");
        }

        // Atualiza os dados da modalidade na lista global
        globalData.modalidadesList.splice(index, 1);
    }
}