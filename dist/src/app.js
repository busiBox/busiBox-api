"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
// import routes from "./routes";
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middlewares();
        this.dotenv();
        this.database();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    };
    App.prototype.database = function () {
        mongoose_1.default.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    };
    App.prototype.routes = function () {
        var _this = this;
        fs_1.default.readdirSync(__dirname + '/routes')
            .map(function (file) {
            var routes = require("./routes/" + file);
            if (file === 'index.ts') {
                _this.express.use('/', routes);
            }
            else {
                _this.express.use("/" + file.substring(0, file.indexOf('.')), routes);
            }
        });
    };
    App.prototype.dotenv = function () {
        dotenv_1.default.config();
    };
    return App;
}());
exports.default = new App().express;
