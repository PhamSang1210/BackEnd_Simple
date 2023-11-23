import { ENV } from "./env.config.js";

const dev = {
    app: {
        PORT: ENV.PORT,
    },
    db: {
        db_name: ENV.NAME_DB,
        host: ENV.HOST_DB,
        port: ENV.PORT_DB,
        name: ENV.DEV_DB_NAME,
    },
};

const pro = {
    app: {
        PORT: ENV.PORT,
    },
    db: {
        db_name: ENV.NAME_DB,
        host: ENV.HOST_DB,
        port: ENV.PORT_DB,
        name: ENV.PRO_DB_NAME,
    },
};

const env = ENV.NODE_ENV;
const config = { dev, pro };

export default config[env];
