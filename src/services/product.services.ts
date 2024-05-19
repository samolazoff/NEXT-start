import { IProduct } from "@/types/product.interface";
import axios from "axios";

const PRODUCTS = 'http://localhost:4200/products';

export default ProductServices = {
    async getAll() {
        const {data} = await axios<IProduct[]>({
            url: PRODUCTS,
            method: "GET"
        })
    }
}