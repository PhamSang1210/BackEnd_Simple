"use strict";
import { StatusCodes } from "http-status-codes";
import apiKeyModel from "../../models/apiKey.model.js";
import { findByKey } from "../../services/apiKey.service.js";
import crypto from "crypto";

const HEADER = {
    apiKey: "x_api_key",
    AUTHENZITION: "authenzition",
};

const apiKey = async (req, res, next) => {
    try {
        const key = req.headers[HEADER.apiKey]?.toString();
        if (!key) {
            return res.status(301).json({ code: 301, msg: "Bla Bla" });
        }

        //Check Key in database
        const objKey = await apiKeyModel.findOne({ key });

        // if (objKey === null || objKey === undefined) {
        //     return {
        //         msg: `Can't Key ????`,
        //     };
        // }

        if (!objKey) {
            return res.status(StatusCodes.NOT_FOUND).json({
                code: StatusCodes.NOT_FOUND,
            });
        }

        if (objKey) {
            req.objKey = objKey;
            // Xét trường hợp để lấy key trong model 1 cách hợp lệ và [res] là yếu tố lỗi
            // Chọn 1 trong 2 return và khuyên nên dùng return next() và xét trường để
            // làm 1 cái middleware
            return res.status(StatusCodes.OK).json({
                code: StatusCodes.OK,
                data: objKey,
            });

            // return next();
        }
    } catch (error) {
        return res.status(403).json(error);
    }
};

export { apiKey };
