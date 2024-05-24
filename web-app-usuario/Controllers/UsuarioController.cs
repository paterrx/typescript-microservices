using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using System.Data;
using web_app_usuario.Entidades;

namespace web_app_usuario.Controllers
{
    [ApiController]
    [Route("[controller]")]


    public class UsuarioController : ControllerBase
    {
        private readonly string? _connectionString;

        public UsuarioController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");

        }

        private IDbConnection OpenConnection()
        {
            IDbConnection dbConnection = new SqliteConnection(_connectionString);
            dbConnection.Open();
            return dbConnection;
        }

  
        [HttpGet]
        public async Task<IActionResult> GetAllUsuarios()
        {
            using IDbConnection dbConnection = OpenConnection();

            string sql = "SELECT * FROM Usuario";
            var usuarios = await dbConnection.QueryAsync<Usuario>(sql);
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsuarioById(int id)
        {
            using IDbConnection dbConnection = OpenConnection();
            string sql = "SELECT * FROM Usuario WHERE Id = @Id";

            var usuario = await dbConnection.QueryFirstOrDefaultAsync<Usuario>(sql, new { id });
            if (usuario == null)
            {
                return NotFound();
            }
            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> AddUsuario([FromBody] Usuario usuario)
        {
            using IDbConnection dbConnection = OpenConnection();

            dbConnection.Execute("insert into Usuario(nome, senha, idade, sobrenome) values(@Nome, @Senha, @Idade, @Sobrenome)", usuario);
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateUsuario([FromBody] Usuario usuario)
        {

            using IDbConnection dbConnection = OpenConnection();

            // Atualiza o usuario
            var query = @"UPDATE Usuario SET 
                          Nome = @Nome,
                          Senha = @Senha,
                          Idade = @Idade,
                          Sobrenome = @Sobrenome
                          WHERE Id = @Id";

            dbConnection.Execute(query, usuario);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            using IDbConnection dbConnection = OpenConnection();

            var usuario = await dbConnection.QueryAsync<Usuario>("delete from usuario where id = @id;", new { id });
            return Ok();
        }

    }
}
