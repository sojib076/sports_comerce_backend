"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const userModel_1 = require("./userModel");
const productadd = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userModel_1.Product.create(payload);
        console.log('sojib', result);
    }
    catch (error) {
        console.log(error);
    }
});
const productget = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const searchQuery = req.query.searchTerm;
    const category = req.query.category;
    // eslint-disable-next-line prefer-const
    let query = {};
    if (searchQuery) {
        query.name = { $regex: searchQuery, $options: 'i' }; // Case insensitive search
    }
    if (category) {
        query.category = category;
    }
    const result = yield userModel_1.Product.find(query).sort({ createdAt: -1 });
    return result;
});
const productgetbyid = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userModel_1.Product.findById(id);
    return result;
});
const checkStock = (productIds) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(productIds);
    try {
        const products = yield userModel_1.Product.find({ _id: { $in: productIds } });
        const stockStatus = products.map(product => ({
            id: product._id,
            name: product.name,
            stock: product.stockQuantity,
        }));
        return stockStatus;
    }
    catch (error) {
        console.log(error);
    }
});
const updateStock = (productIds, stockquantity) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(stockquantity, 'updateStock');
    try {
        const updatePromises = productIds.map((id, index) => __awaiter(void 0, void 0, void 0, function* () {
            const quantityToUpdate = stockquantity[index]; // Assuming stockquantity is an array of quantities
            try {
                // Retrieve current stock quantity
                const product = yield userModel_1.Product.findById(id);
                if (!product) {
                    throw new Error(`Product with id ${id} not found`);
                }
                const currentQuantity = product.stockQuantity;
                const newQuantity = currentQuantity - quantityToUpdate;
                // Update stock quantity
                const updatedProduct = yield userModel_1.Product.findByIdAndUpdate(id, { stockQuantity: newQuantity }, { new: true });
                return updatedProduct;
            }
            catch (error) {
                console.log(error);
                throw error; // Re-throw the error to handle it further if needed
            }
        }));
        const updatedProducts = yield Promise.all(updatePromises);
        console.log('Products updated successfully:', updatedProducts);
    }
    catch (error) {
        console.error('Error updating products:', error);
    }
});
const updateProduct = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userModel_1.Product.findByIdAndUpdate(id, body, { new: true });
    return result;
});
const productdelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userModel_1.Product.findByIdAndDelete(id);
    return result;
});
exports.ProductServices = {
    productadd,
    productget,
    productgetbyid,
    checkStock,
    updateStock,
    productdelete,
    updateProduct
};
