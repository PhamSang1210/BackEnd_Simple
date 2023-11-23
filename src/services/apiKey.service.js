import crypto from "crypto";
import ApiKeyModel from "../models/apiKey.model.js";

const findByKey = async ({ key }) => {
    try {
        const objKey = await ApiKeyModel.findOne({
            key,
        }).lean();

        console.log(`Dong nay co duoc in ra`);

        if (!objKey) {
            return {
                code: 401,
                msg: "err",
            };
        }

        console.log(`Dong nay co duoc in ra lan 2`);
        // return objKey;
    } catch (error) {
        return {
            error: 1,
            msg: error,
        };
    }
};

export { findByKey };
