import app from "./config/express.config.js";

app.post('/encode', encode);
app.get('/decode', decode);

app.get('/', (req, res) => {
    res.status(200).send({
        code: 200,
        message: "B64 Linker Api versão 1.0.0",
        timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
});

app.use((req, res) => {
    res.status(404).send({
        code: 404,
        message: "Endpoint não encontrado :/",
        timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
});

export default app;