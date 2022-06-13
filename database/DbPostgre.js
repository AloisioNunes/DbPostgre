const Client = require('pg').Client;

class DbPostgre {

    constructor(clientData) {
        
        if (clientData) {
            this.clientData = clientData;
        } else {
            this.clientData = {
                user: "postgres",
                password: "postgres",
                host: "localhost",
                port: 5432,
                database: "mercearia_dev"
            }
        }
        
    }

    async client() {

        var client = new Client(this.clientData);
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