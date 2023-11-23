import { Schema, model } from "mongoose";
import { timeCreated, timeUpdated } from "../utils/time.util.js";
const DOCUMENT_NAME = "shop";
const COLLECTION_NAME = "shops";

const shopSchema = new Schema(
    {
        name: { type: String, trim: true, maxLength: 150 },
        email: { type: String, trim: true, required: true, unique: true },
        password: { type: String, required: true },
        status: { type: String, enum: ["active", "inactive"] },
        verify: { type: Boolean, default: false },
        roles: { type: Schema.Types.Array, default: [] },
        timeCreated,
        timeUpdated,
    },
    {
        collection: COLLECTION_NAME,
    }
);

export default model(DOCUMENT_NAME, shopSchema);
