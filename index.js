import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});