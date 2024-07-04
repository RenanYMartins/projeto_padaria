import express from 'express';
import { 
    createModalidade, 
    getModalidadeById, 
    getModalidades, 
    updateModalidade,
    deleteModalidade 
} from './controller/modalidadePaesController';
import { 
    createEstoque, 
    getAllEstoque, 
    getEstoqueById, 
    updateEstoque,
    deleteEstoque 
} from './controller/estoquePaesController';
import { 
    createVenda, 
    getAllVenda
} from './controller/vendaPaesController';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.post("/api/modalidade", createModalidade);
app.get("/api/modalidade", getModalidades);
app.get("/api/modalidade/:id", getModalidadeById);
app.put("/api/modalidade/:id", updateModalidade);
app.delete("/api/modalidade/:id", deleteModalidade);
app.post("/api/estoque", createEstoque);
app.get("/api/estoque", getAllEstoque);
app.get("/api/estoque/:id", getEstoqueById);
app.put("/api/estoque/:id", updateEstoque);
app.delete("/api/estoque/:id", deleteEstoque);
app.post("/api/venda", createVenda);
app.get("/api/venda", getAllVenda);


app.listen(PORT, () => {
    console.log(`API em execução na URL: http://localhost:${PORT}`);
});
