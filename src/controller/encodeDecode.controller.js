import responseBuilder from "../builders/responseBuilder.builder.js";

async function encode(req, res) {
  const { link } = req.query;

  try {
    const codifiedLink = Buffer.from(link).toString("base64url");
    return res.status(200).send(await responseBuilder(200, codifiedLink));
  } catch (error) {
    return res.status(500).send(await responseBuilder(500, `Erro Interno: ${error.message}`));
  }
}

async function decode(req, res) {
  const code = req.query.code;
  try {
    const uncodifiedLink = Buffer.from(code, "base64url").toString("ascii");
    return res.status(200).send(await responseBuilder(200, uncodifiedLink));
  } catch (error) {
    return res.status(500).send(await responseBuilder(500, `Erro Interno: ${error.message}`));
  }
}

export { encode, decode };
