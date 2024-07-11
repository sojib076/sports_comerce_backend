/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from "./userModel";

const productadd = async (payload: any) => {

  try {
    const result = await Product.create(payload);
    console.log('sojib', result);
  } catch (error) {
    console.log(error);
  }

}

const productget = async (req: any) => {
  console.log(req.query.category, 'req.query.searchTerm');
  const searchQuery = req.query.searchTerm as string;
  const category = req.query.category as string;

  // eslint-disable-next-line prefer-const
  let query: any = {};
  if (searchQuery) {
    query.name = { $regex: searchQuery, $options: 'i' }; // Case insensitive search
  }
  if (category) {
    query.category = category;
  }
  const result = await Product.find(query).sort({ createdAt: -1 });
  return result;
};

const productgetbyid = async (id: string) => {
  const result = await Product.findById(id);

  return result;

};

const checkStock = async (productIds: any) => {
  console.log(productIds);
  try {
    const products = await Product.find({ _id: { $in: productIds } });
    const stockStatus = products.map(product => ({
      id: product._id,
      name: product.name,
      stock: product.stockQuantity,
    }));
    return stockStatus;

  } catch (error) {
    console.log(error);
  }

}
const updateStock = async (productIds: any, stockquantity: any) => {
  console.log( stockquantity,'updateStock');
  try {
    const updatePromises = productIds.map(async (id: string, index: number) => {
        const quantityToUpdate = stockquantity[index]; // Assuming stockquantity is an array of quantities

        try {
            // Retrieve current stock quantity
            const product = await Product.findById(id);
            
            if (!product) {
                throw new Error(`Product with id ${id} not found`);
            }

            const currentQuantity = product.stockQuantity;
            const newQuantity = currentQuantity - quantityToUpdate;

            // Update stock quantity
            const updatedProduct = await Product.findByIdAndUpdate(id, { stockQuantity: newQuantity }, { new: true });

            return updatedProduct;
        } catch (error) {
            console.log(error);
            throw error; // Re-throw the error to handle it further if needed
        }
    });

    const updatedProducts = await Promise.all(updatePromises);
    console.log('Products updated successfully:', updatedProducts);
} catch (error) {
    console.error('Error updating products:', error);
}

}
const productdelete = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  productadd,
  productget,
  productgetbyid,
  checkStock,
  updateStock,
  productdelete
}