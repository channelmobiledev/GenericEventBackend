"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express_1.default.Router();
        router.get("/", function (req, res) {
            res.json({
                message: "Hello World!",
            });
        });
        this.express.use("/", router);
    };
    return App;
}());
exports.default = new App().express;
