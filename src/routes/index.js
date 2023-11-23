import accessRouter from "./access/access.route.js";

function route(app) {
    app.use("/v1/api/user", accessRouter);
}

export default route;
