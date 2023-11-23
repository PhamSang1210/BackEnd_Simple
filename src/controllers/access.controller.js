"use strict";
import AccessServices from "../services/access.service.js";

class AccessController {
    static async register(req, res, next) {
        try {
            console.log(`[P]:::[register]:::${req.body}`);

            const newShop = await AccessServices.register(req.body);

            res.status(201).json(newShop);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            console.log("Info Shop: ", req.body);
            const infoShop = await AccessServices.login(req.body);
            return res.status(200).json(infoShop);
        } catch (error) {
            return res.status(301).json({
                code: 301,
                error: 1,
                msg: "Failure",
            });
        }
    }
}

export default AccessController;
