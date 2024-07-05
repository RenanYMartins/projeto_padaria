import { ItemVenda } from './itemVenda';
export class VendaPaes {
    id: number;
    cpfClient: string;
    totalValue: number;
    itens: ItemVenda[];

    constructor(cpfClient: string, totalValue:number, itens:ItemVenda[]){
        this.id = this.geraId();
        this.cpfClient = cpfClient;
        this.totalValue = totalValue;
        this.itens = itens;
    }

    private geraId():number{
        return Date.now();
    }
}