"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var routes = express_1.Router();
routes.post('/', UserController_1.default.create);
routes.get('/', UserController_1.default.index);
routes.get('/:_id', UserController_1.default.getOne);
routes.put('/:_id', UserController_1.default.update);
routes.post('/:_id', UserController_1.default.inactivate);
module.exports = routes;
