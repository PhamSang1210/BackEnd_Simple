import { Schema, model } from "mongoose";
import { timeCreated, timeUpdated } from "../utils/time.util.js";

const DOCUMENT_NAME = "key";
const COLLECTION_NAME = "keys";

const keyTokenSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: "shop" },
        privateKey: { type: String, required: true },
        publicKey: { type: String, required: true },
        refreshToken: { type: Array, default: [] },
        timeCreated,
        timeUpdated,
    },
    {
        collection: COLLECTION_NAME,
    }
);

export default model(DOCUMENT_NAME, keyTokenSchema);
