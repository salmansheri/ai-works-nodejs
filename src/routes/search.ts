import express, { Request, Response } from "express";
import { searchProducts } from "../controllers/search";

const router = express.Router();

router.route("/").get(async (req: Request, res: Response) => {
  const { query } = req.query;
  console.log(query);

  try {
    const data = await searchProducts(query as string);
    return res.status(200).json(`${data.products[0].price.currentPrice} ${data.products[0].price.priceSymbol}`); 
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
