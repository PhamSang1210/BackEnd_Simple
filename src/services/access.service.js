"use strict";
import bcrypt from "bcrypt";
import shopModel from "../models/shop.model.js";
import crypto from "crypto";
import KeyTokenServices from "./keyToken.service.js";
import AuthUtilsJWT from "../auth/authUtils.js";
import { getInfoData } from "../utils/index.js";

const ROLES = {
    SHOP: "SHOP",
    WRITE: "WRITE",
    ADMIN: "ADMIN",
};

class AccessServices {
    static async register({ name, email, password }) {
        try {
            const holdShop = await shopModel.findOne({ email });
            // check exits
            if (holdShop) {
                return {
                    code: 301,
                    msg: "register alredy exists !!!!!",
                };
            }

            // hashPassword
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const newShop = await shopModel.create({
                name,
                email,
                password: hashPassword,
                roles: [ROLES.SHOP],
            });

            //!If create success
            if (newShop) {
                // create privateKey,publicKey => Secret JWT
                // const { privateKey, publicKey } = crypto.generateKeyPairSync(
                //     "rsa",
                //     {
                //         modulusLength: 4096,
                //         publicKeyEncoding: {
                //             type: "pkcs1",
                //             format: "pem",
                //         },
                //         privateKeyEncoding: {
                //             type: "pkcs1",
                //             format: "pem",
                //         },
                //     }
                // );

                const publicKey = crypto.randomBytes(64).toString("hex");
                const privateKey = crypto.randomBytes(64).toString("hex");

                // take publicKey from services keyToken
                const keyStore = await KeyTokenServices.createKeyToken({
                    userId: newShop._id,
                    publicKey,
                    privateKey,
                });

                // check publickeyString
                if (!keyStore) {
                    return {
                        code: "xxxx",
                        msg: "error keyStore !!!",
                    };
                }

                // Through JWT [accessToken,refreshToken] => authUtils
                const tokens = AuthUtilsJWT.createTokenPair(
                    {
                        userId: newShop._id,
                        email,
                    },
                    publicKey,
                    privateKey
                );

                return {
                    code: 201,
                    msg: "Register Sucess <3",
                    metaData: {
                        shop: getInfoData({
                            object: newShop,
                            fileds: ["_id", "name", "email"],
                        }),
                        tokens,
                    },
                };
                /*
                
                */
            }

            return {
                code: 301,
                error: 1,
                msg: "Can't create shop,due to missing fields <3 !!!!!",
            };
            // ! End check
        } catch (error) {
            return {
                code: "301",
                msg: error,
            };
        }
    }

    static async login({ name, password }) {
        if (!name) {
            console.log(`Can't >>> Name`);
        }

        if (!password) {
            console.log(`Can't >>> Password`);
        }

        try {
            const shop = await shopModel.findOne({ name });
            const hashPassword = await bcrypt.compare(password, shop.password);

            if (!shop) {
                return {
                    code: 301,
                    error: 1,
                    msg: "Username incorrect",
                };
            }

            if (!hashPassword) {
                return {
                    code: 301,
                    error: 1,
                    msg: "Password incorrect",
                };
            }

            if (shop && hashPassword) {
                return {
                    code: 200,
                    error: 0,
                    shopInfo: shop,
                };
            }
        } catch (error) {
            return {
                code: 301,
                error: 1,
                msg: error,
            };
        }
    }
}

export default AccessServices;
