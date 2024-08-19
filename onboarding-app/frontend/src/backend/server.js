const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');

const app = express();
app.use(bodyParser.json());

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function checkUser(email, senha) {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: 'RM93530',
      password: '030802',
      connectString: 'oracle.fiap.com.br:1521/ORCL'
    });

    const result = await connection.execute(
      `SELECT * FROM ONBOARDING_APP_USUARIOS WHERE EMAIL = :email AND SENHA = :senha`,
      [email, senha]
    );

    return result.rows.length > 0;
  } catch (err) {
    console.error("Erro ao verificar usuário:", err);
    return false;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Erro ao fechar a conexão:", err);
      }
    }
  }
}

async function registerUser(nome, email, senha) {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: 'RM93530',
      password: '030802',
      connectString: 'oracle.fiap.com.br:1521/ORCL'
    });

    await connection.execute(
      `INSERT INTO ONBOARDING_APP_USUARIOS (NOME, EMAIL, SENHA) VALUES (:nome, :email, :senha)`,
      [nome, email, senha],
      { autoCommit: true }
    );

    return true;
  } catch (err) {
    console.error("Erro ao registrar usuário:", err);
    return false;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Erro ao fechar a conexão:", err);
      }
    }
  }
}

// Rota para login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;
  const success = await checkUser(email, senha);
  res.json({ success });
});

// Rota para registro
app.post('/api/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  const success = await registerUser(nome, email, senha);
  res.json({ success });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Middleware para capturar 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});
