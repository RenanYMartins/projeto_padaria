import { VendaPaes } from "../model/vendaPaes";
import { globalData } from "../global/global";

export class VendaPaesRepository{
    add(venda: VendaPaes){
       globalData.vendaList.push(venda);
    }

    getAllVenda():VendaPaes[]{
        return globalData.vendaList;
    }
}