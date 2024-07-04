import { VendaPaes } from './../model/vendaPaes';
import { VendaPaesRepository } from '../repository/vendaPaesRepository';
import { globalData } from '../global/global'; 


export class VendaPaesService {
    vendaPaesRepository: VendaPaesRepository = new VendaPaesRepository;

    create(venda: VendaPaes): VendaPaes {
        const { cpfClient, totalValue, itens } = venda;


        if (!cpfClient == null || !totalValue == null || !itens == null) {
            throw new Error("Informações incompletas");
        }
        const newVenda = new VendaPaes(cpfClient, totalValue, itens);

        this.vendaPaesRepository.add(newVenda);

        return newVenda;
    }

    getAllVenda():VendaPaes[]{
        return this.vendaPaesRepository.getAllVenda();
    }

}