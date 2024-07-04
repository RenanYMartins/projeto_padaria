export class VendaPaes {
    id: number;
    cpfClient: string;
    totalValue: number;
    itens: {idModalidade: number, quantity: number, value: number}[];

    constructor(cpfClient: string, totalValue:number, itens:{idModalidade: number, quantity: number, value: number}[]){
        this.id = this.geraId();
        this.cpfClient = cpfClient;
        this.totalValue = totalValue;
        this.itens = itens;
    }

    private geraId():number{
        return Date.now();
    }
}