import mongoose from "mongoose";
import configMongodb from "../configs/config.mongodb.js";
import CheckConnect from "../helpers/checkConnect.mongodb.js";

const { db_name, host, port, name } = configMongodb.db;

const connectString = `${db_name}://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    async connect(TYPE = "MONGODB") {
        // Gia su o moi truong o moi truong dev
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        }

        try {
            await mongoose.connect(connectString);
            console.log(
                `SUCCESS ❤️`,
                "\n",
                "Connections:",
                CheckConnect.countConnection()
            );
        } catch (error) {
            console.log(`ERROR !!!!!!!`);
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceConnect = Database.getInstance();

export default instanceConnect;
