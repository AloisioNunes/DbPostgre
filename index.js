const DbPostgre = require('./database/DbPostgre');

var db = new DbPostgre(
    {
        user: "postgres",
        password: "postgres",
        host: "localhost",
        port: 5432,
        database: "mercearia"
    });

(async () => {

    var result = await db.execute('SELECT * FROM venda');
    console.table(result.rows);

    var result = await db.execute("SELECT 'Aloísio' AS nome, 'Nunes' AS sobrenome");
    console.table(result.rows);

})();