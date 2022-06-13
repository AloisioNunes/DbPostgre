const Client = require('pg').Client;

class DbPostgre {

    async client() {

        var client = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "mercearia_dev"
        });
        
        return client;

    }
    
    
    async execute(sql) {
    
        try {
            var client = await this.client();
            await client.connect();
            var result = await client.query(sql);
            return result;
        } catch (exception) {
            throw exception;
        } finally {
            await client.end();
        }
    
    }

}

module.exports = DbPostgre;