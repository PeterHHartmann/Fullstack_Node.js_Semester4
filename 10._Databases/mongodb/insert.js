const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:[27017]";
const dbName = "beers";

MongoClient.connect(url, {useUnifiedTopology: true},(error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const breweries = db.collection("beers");

    breweries.insertOne({name: "Nørrebro Bryghus"}, (error, result) => {
        if (error) {
            throw new Error(error);
        }
        client.close();
    });

});