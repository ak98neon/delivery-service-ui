import {IProduct} from './IProduct';

export interface IOrder {
    orders: [IProduct];
    totalPrice: number;
    quantity: number;
}
