import jwt from "jsonwebtoken";

class AuthUtilsJWT {
    static createTokenPair(payload, publicKey, privateKey) {
        // Handle error
        if (!payload) {
            console.log(`Can't verify >> payload`);
        }
        if (!publicKey) {
            console.log("Can't >> verify publickey !!!!");
        }
        if (!privateKey) {
            console.log(`Cant't >> verify privateKey`);
        }
        // try catch
        try {
            const accessToken = jwt.sign(payload, privateKey, {
                // algorithm: "RS256",
                expiresIn: "2d",
            });

            const refreshToken = jwt.sign(payload, privateKey, {
                // algorithm: "RS256",
                expiresIn: "7d",
            });

            // Xac thuc
            jwt.verify(accessToken, publicKey, (err, decode) => {
                if (err) {
                    return {
                        code: 301,
                        err: 1,
                        msg: "error secret !!!",
                    };
                }
                console.log(`Decode Success: ${decode}`);
            });

            return {
                accessToken,
                refreshToken,
            };
        } catch (error) {
            return {
                code: 301,
                err: 1,
                alert: "Error createTokenPair !!!",
                msg: error,
            };
        }
    }
}

export default AuthUtilsJWT;
