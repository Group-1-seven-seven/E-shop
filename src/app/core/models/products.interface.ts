import { Users } from "./users.interface";

export interface Product {
    id?: number,
    category: string,
    productName: string,
    image: string,
    description: string,
    price: number,
    qty: number,
    isActive?: boolean,
    customer?: [
        {
            users: Users[],
            comments: string
        }
    ],
    date: Date,
    typePayment: string,
    sold?: number
}