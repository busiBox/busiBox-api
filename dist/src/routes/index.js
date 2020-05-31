"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes.get('/', function (_, res) { return res.json({ message: "Hello, busiBoxer :)" }); });
module.exports = routes;
