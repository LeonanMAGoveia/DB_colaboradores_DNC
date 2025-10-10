import pkg from "jsonwebtoken";
const { verify } = pkg;

export function isAuthenticated(req, res, next) {
  //  Receber o token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  // O token vem no formato "Bearer eyJhbGciOiJ..."
  // Usamos o split para pegar apenas o código do token
  const [, token] = authToken.split(" ");

  try {
    // Validar o token
    const { sub } = verify(token, process.env.JWT_SECRET);

    //  Adicionar o ID do token na requisição (req) para os próximos middlewares usarem
    req.user_id = sub;

    return next(); // Deixa a requisição prosseguir
  } catch (error) {
    return res.status(401).json({ error: "Token inválido." });
  }
}
