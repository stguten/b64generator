import app from "./config/express.config.js";
import * as encodeDecodeController from "./controller/encodeDecode.controller.js";

app.post('/encode', encodeDecodeController.encode);
app.get('/decode', encodeDecodeController.decode);

app.get('/', async (req, res) => {
    res.status(200).send(await responseBuilder(200, "B64 Linker Api versão 1.0.0"));
});

app.use(async (req, res) => {
    res.status(404).send(await responseBuilder(404, "Rota não encontrada"));
});

export default app;