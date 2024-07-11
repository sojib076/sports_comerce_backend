import { asyncHandler } from "../utils/asyncHandler";
import sendResponse from "../utils/sendResponse";
import { ProductServices } from "./userServices";

const Productadd = asyncHandler(async (req, res) => {
    console.log(req.body);
    const result = await ProductServices.productadd(req.body);
    console.log(result);
      
    sendResponse(res,{
        statusCode:200,
        message:"Product added successfully",
        success:true,
        data:result
    }); 
});

const Productget = asyncHandler(async (req, res) => {

    const result = await ProductServices.productget(req);

    sendResponse(res,{
        statusCode:200,
        message:"Products fetched successfully",
        success:true,
        data:result
    });
});
const Productgetbyid = asyncHandler(async (req, res) => {
          
        const result = await ProductServices.productgetbyid(req.params.id);
        console.log(result); 
        sendResponse(res,{
            statusCode:200,
            message:"Products fetched successfully",
            success:true,
            data:result
        });
});
const checkStock = asyncHandler(async (req, res) => {
    const { productIds } = req.body; 

    const result = await ProductServices.checkStock(productIds);
    sendResponse(res,{
        statusCode:200,
        message:" ALl Products fetched successfully",
        success:true,
        data:result
    });
})  
const updateStock = asyncHandler(async (req, res) => {
    const { productIds ,stockquantity } = req.body; 
 
    const result = await ProductServices.updateStock(productIds,stockquantity);
    sendResponse(res,{
        statusCode:200,
        message:"  Products stock updated successfully",
        success:true,
        data:result
    });
}) 

const Productdelete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.productdelete(id);
    sendResponse(res,{
        statusCode:200,
        message:"Product deleted successfully",
        success:true,
        data:result
    });
});

export  const
 productcontroller = {
    Productadd,
    Productget,
    Productgetbyid,
    checkStock,
    updateStock,
    Productdelete
}