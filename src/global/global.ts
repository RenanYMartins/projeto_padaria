import { EstoquePaes } from "../model/estoquePaes";
import { ModalidadePaes } from "../model/modalidadePaes";
import { VendaPaes } from "../model/vendaPaes";

export class GlobalClass {
    modalidadesList: ModalidadePaes[] = [];
    estoqueList: EstoquePaes[] = [];
    vendaList: VendaPaes[] = [];
} 

export const globalData = new GlobalClass();