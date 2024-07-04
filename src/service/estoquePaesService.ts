import { EstoquePaes } from './../model/estoquePaes';
import { EstoquePaesRepository } from '../repository/estoquePaesRepository';
import { globalData } from '../global/global'; 


export class EstoquePaesService {
    estoquePaesRepository: EstoquePaesRepository = new EstoquePaesRepository;

    create(estoque: EstoquePaes): EstoquePaes {
        const { modalidadeID, quantity, price } = estoque;
        if (!modalidadeID == null || !quantity == null || !price == null) {
            throw new Error("Informações incompletas");
        }
        const newEstoque = new EstoquePaes(modalidadeID, quantity, price);

        this.estoquePaesRepository.add(newEstoque);

        return newEstoque;
    }

    getAllEstoque():EstoquePaes[]{
        return this.estoquePaesRepository.getAllEstoque();
    }

    getEstoqueById(id:number): EstoquePaes | undefined{
        return this.estoquePaesRepository.getEstoqueById(id);
    }

    updateEstoque(estoque: EstoquePaes) {
        const searchedEstoque = this.getEstoqueById(estoque.id);

        if(!searchedEstoque){
            throw new Error("Estoque não encontrado");
        }

        searchedEstoque.modalidadeID = estoque.modalidadeID;
        searchedEstoque.quantity = estoque.quantity;
        searchedEstoque.price = estoque.price;

        this.estoquePaesRepository.update(searchedEstoque);

        return searchedEstoque;
    }

    deleteEstoque(id:number) {
        return this.estoquePaesRepository.delete(id);
    }
}