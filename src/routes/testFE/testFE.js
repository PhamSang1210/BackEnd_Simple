import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        code: 200,
        data: [
            {
                msg: "success",
            },
            {
                msg: "Method GET [/]",
            },
        ],
    });
});

export default router;
