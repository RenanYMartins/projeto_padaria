export class VendaPaes {
    cpfClient: string;
    totalValue: number;
    itens: {idModalidade: number, quantity: number, value: number}[];

    constructor(cpfClient: string, totalValue:number, itens:{idModalidade: number, quantity: number, value: number}[]){
        this.cpfClient = cpfClient;
        this.totalValue = totalValue;
        this.itens = itens;
    }
}