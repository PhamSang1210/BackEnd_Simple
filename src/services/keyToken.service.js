import keyTokenModel from "../models/keyToken.model.js";

class KeyTokenServices {
    static async createKeyToken({ userId, publicKey, privateKey }) {
        try {
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey,
                privateKey,
            });

            return tokens ? publicKeyString : null;
        } catch (error) {
            return {
                code: "xxx",
                msg: "Can't create token !!!!!!!",
            };
        }
    }
}

export default KeyTokenServices;
