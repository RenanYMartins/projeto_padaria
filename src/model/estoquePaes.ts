export class EstoquePaes {
    id: number;
    modalidadeID: number;
    quantity: number;
    price:number;

    constructor(modalidadeID:number, quantity:number, price: number){
        this.id = this.geraId();
        this.modalidadeID = modalidadeID;
        this.quantity = quantity;
        this.price = price;
    }

    private geraId():number{
        return Date.now();
    }
}