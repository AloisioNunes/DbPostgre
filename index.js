const DbPostgre = require('./database/DbPostgre');
var db = new DbPostgre();

(async () => {

    var result = await db.execute('SELECT * FROM venda');
    console.table(result.rows);

    var result2 = await db.execute("SELECT 'Aloísio' AS nome, 'Nunes' AS sobrenome");
    console.log(result2.rows);

})();