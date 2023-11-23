import app from "./src/app.js";
import { ENV } from "./src/configs/env.config.js";

const PORT = 5595;

const server = app.listen(PORT, () => {
    console.log(`Listen at PORT:http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log(`Express Shutdown !!!`);
    });
});
