"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CompanySchema = new mongoose_1.Schema({
    companyName: {
        type: String,
        required: true,
        unique: true,
    },
    fantasyName: {
        type: String,
        required: true,
    },
    fieldActivity: {
        type: String,
        required: true,
    },
    registeredNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: Object,
        required: true,
        zipcode: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        street: { type: String },
        number: { type: String },
    },
    phone: [{
            type: String,
            required: false
        }],
    active: {
        type: Boolean,
        default: true,
        required: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Company', CompanySchema);
