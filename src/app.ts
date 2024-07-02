import express from 'express';
import { 
    createModalidade, 
    filterModalidadeById, 
    filterModalidades, 
    updateModalidade,
    deleteModalidade 
} from './controller/modalidadePaesController';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.post("/api/modalidade", createModalidade);
app.get("/api/modalidade", filterModalidades);
app.get("/api/modalidade/:id", filterModalidadeById);
app.put("/api/modalidade/:id", updateModalidade);
app.delete("/api/modalidade/:id", deleteModalidade);

app.listen(PORT, () => {
    console.log(`API em execução na URL: http://localhost:${PORT}`);
});
