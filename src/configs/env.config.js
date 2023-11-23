import "dotenv/config";

const ENV = {
    PORT: process.env.PORT || 8000,
    NAME_DB: process.env.NAME_DB || "mongodb",
    HOST_DB: process.env.HOST_DB || "localhost",
    PORT_DB: process.env.PORT_DB || 27017,
    NODE_ENV: process.env.NODE_ENV || "dev",
    DEV_DB_NAME: process.env.DEV_DB_NAME || "shopSimple",
    PRO_DB_NAME: process.env.PRO_DB_NAME || "shopEducation",
};

export { ENV };
