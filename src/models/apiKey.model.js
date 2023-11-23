import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "apiKey";
const COLLECTION_NAME = "apiKeys";

const apiKeySchema = new Schema(
    {
        key: { type: String, required: true, unique: true },
        status: { type: Schema.Types.Boolean, default: true },
        premissions: {
            type: [String],
            required: true,
            enum: ["0000", "1111", "2222"],
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

export default model(DOCUMENT_NAME, apiKeySchema);
