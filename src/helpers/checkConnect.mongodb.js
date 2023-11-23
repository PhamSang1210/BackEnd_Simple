"use strict";
import mongoose from "mongoose";
import os from "os";

const _SECONDS = 5000;

class CheckConnect {
    static countConnection() {
        const numConnect = mongoose.connections.length;
        return numConnect;
    }

    static checkOverLoad() {
        setInterval(() => {
            //take cores
            const numCores = os.cpus().length;
            // Take memoryUsage
            const memoryUsage = process.memoryUsage().rss;
            // Example 5 seconds else 1 connect
            const maxConnection = numCores * 5;

            //1. memoryUsage / 1024 => Kb
            // 2.( memoryUsage / 1024) / 1024 => MB

            console.log({
                err: 0,
                msg: `Memory Usage: ${memoryUsage / 1024 / 1024} MB`,
            });

            if (numCores > maxConnection) {
                return {
                    code: 500,
                    err: 1,
                    msg: "Server OverLoad !!!!!!!",
                };
            }
        }, _SECONDS);
    }
}

export default CheckConnect;
