import { EstoquePaes } from "../model/estoquePaes";
import { globalData } from "../global/global";
import { convertTypeAcquisitionFromJson } from "typescript";

export class EstoquePaesRepository{
    add(estoque: EstoquePaes){
       globalData.estoqueList.push(estoque);
    }

    getAllEstoque():EstoquePaes[]{
        return globalData.estoqueList;
    }
    
    getEstoqueById(id: number): EstoquePaes | undefined {
        console.log(globalData.estoqueList);
        return globalData.estoqueList.find(estoque => estoque.id === id);
    }

    update(estoque: EstoquePaes): void {
        const index = globalData.estoqueList.findIndex(estoque => estoque.id === estoque.id);

        if (index === -1) {
            throw new Error("Estoque não encontrado");
        }

        // Atualiza os dados da estoque na lista global
        globalData.estoqueList[index] = estoque;
    }

    delete(id:number): void {
        const index = globalData.estoqueList.findIndex(estoque => estoque.id === id);

        if (index === -1) {
            throw new Error("Estoque não encontrado");
        }

        // Atualiza os dados da estoque na lista global
        globalData.estoqueList.splice(index, 1);
    }

    verifyEstoqueAvailable(idEstoque: number, quantity: number):boolean {
        const estoque = this.getEstoqueById(idEstoque);
        if(!estoque){
            console.log(estoque);
            return false;
        }
        return quantity <= estoque.quantity;
    }

    updateEstoqueVenda(idEstoque: number, quantity: number):number{
        const estoque = this.getEstoqueById(idEstoque);
        var novoEstoque:number = 0;
        if(estoque == null || estoque.quantity < quantity){
            console.log(estoque, quantity);
            throw new Error;
        }
        novoEstoque = estoque!.quantity - quantity;
        estoque.quantity = novoEstoque;

        this.update(estoque);        

        return estoque.price * quantity;
    }
}