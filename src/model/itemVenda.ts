export class ItemVenda {
    id: number;
    estoquePaesID: number;
    quantity: number;
    
    constructor(estoquePaesID:number, quantity: number){
        this.id = this.geraId();
        this.estoquePaesID = estoquePaesID;
        this.quantity = quantity;
    }

    private geraId():number{
        return Date.now();
    }
}