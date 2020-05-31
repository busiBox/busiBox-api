"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('User', UserSchema);
