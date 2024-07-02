export class ModalidadePaes {
    id:number;
    name:string;
    isVegan:boolean;

    constructor(name:string, isVegan:boolean){
        this.id = this.geraId();
        this.name = name;
        this.isVegan = isVegan;
    }

    private geraId():number{
        return Date.now();
    }
}