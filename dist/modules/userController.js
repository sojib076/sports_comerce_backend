"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productcontroller = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const userServices_1 = require("./userServices");
const Productadd = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield userServices_1.ProductServices.productadd(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product added successfully",
        success: true,
        data: result
    });
}));
const Productget = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userServices_1.ProductServices.productget(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Products fetched successfully",
        success: true,
        data: result
    });
}));
const Productgetbyid = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userServices_1.ProductServices.productgetbyid(req.params.id);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Products fetched successfully",
        success: true,
        data: result
    });
}));
const checkStock = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds } = req.body;
    const result = yield userServices_1.ProductServices.checkStock(productIds);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: " ALl Products fetched successfully",
        success: true,
        data: result
    });
}));
const updateStock = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productIds, stockquantity } = req.body;
    const result = yield userServices_1.ProductServices.updateStock(productIds, stockquantity);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "  Products stock updated successfully",
        success: true,
        data: result
    });
}));
const Productdelete = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield userServices_1.ProductServices.productdelete(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product deleted successfully",
        success: true,
        data: result
    });
}));
const updateProduct = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield userServices_1.ProductServices.updateProduct(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product updated successfully",
        success: true,
        data: result
    });
}));
exports.productcontroller = {
    Productadd,
    Productget,
    Productgetbyid,
    checkStock,
    updateStock,
    Productdelete,
    updateProduct
};
