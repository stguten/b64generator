async function encode(req, res) {
  const { link } = req.query;

  try {
    const codifiedLink = Buffer.from(link).toString("base64url");
    res.status(200).send({
      code: 200,
      message: codifiedLink,
      timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
  } catch (e) {
    res.status(500).send({
      code: 500,
      message: "Erro Interno :/",
      timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
  }
}

async function decode(req, res) {
  const { b64code } = req.query;
  try {
    const uncodifiedLink = Buffer.from(b64code, "base64url").toString("ascii");
    res.status(200).send({
      code: 200,
      message: uncodifiedLink,
      timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
  } catch (e) {
    res.status(500).send({
      code: 500,
      message: "Erro Interno :/",
      timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }),
    });
  }
}

export { encode, decode };
