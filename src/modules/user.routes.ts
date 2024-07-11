import { Router } from "express";
import { productcontroller } from "./userController";


const router = Router();
router.post('/', productcontroller.Productadd);
router.get('/', productcontroller.Productget);
router.get('/:id', productcontroller.Productgetbyid);
router.post('/checkstock', productcontroller.checkStock);
router.post('/updatestock', productcontroller.updateStock);
router.delete('/:id', productcontroller.Productdelete);


export const  UserRoutes = router;