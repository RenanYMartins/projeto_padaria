import { EstoquePaesRepository } from './../repository/estoquePaesRepository';
import { EstoquePaes } from './../model/estoquePaes';
import { VendaPaes } from './../model/vendaPaes';
import { VendaPaesRepository } from '../repository/vendaPaesRepository';
import { globalData } from '../global/global'; 
import { ModalidadePaesService } from './modalidadePaesService';


export class VendaPaesService {
    vendaPaesRepository: VendaPaesRepository = new VendaPaesRepository;
    ModalidadePaesService: ModalidadePaesService = new ModalidadePaesService;
    private estoquePaesRepository: EstoquePaesRepository = new EstoquePaesRepository;    

    create(venda: VendaPaes): VendaPaes {
        const { cpfClient, totalValue, itens } = venda;
    
        if (!cpfClient || !totalValue || !itens) {
            throw new Error("Informações incompletas");
        }
    
        const newVenda = new VendaPaes(cpfClient, totalValue, itens); // Use itensComNome aqui
    
        this.vendaPaesRepository.add(newVenda);
    
        return newVenda;
    }
    

    getAllVenda():VendaPaes[]{
        return this.vendaPaesRepository.getAllVenda();
    }

    getVendaById(id: number): VendaPaes | undefined {
        const venda = this.vendaPaesRepository.getVendaById(id);
        if (venda) {
            return venda;
        }
        return undefined;
    }

}