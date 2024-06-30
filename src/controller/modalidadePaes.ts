export class ModalidadePaes {
    id:number;
    name:string;
    price:number;
    isVegan:boolean;

    constructor(name:string, price:number, isVegan:boolean){
        this.name = name;
        this.price = price;
        this.isVegan = isVegan;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}