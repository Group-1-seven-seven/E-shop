import { ProductItem } from "./product-item";

export interface OrderItem {
    customerId: string;
    orderedDate: Date;
    totalPrice: number;
    status: string;
    products: ProductItem[]
}
