import { ProductItem } from "./product-item";

export interface CartItem {
    customerId: string;
    products: ProductItem[];
    qty: number;
    total?: number;
    subtotal?: number;

}
