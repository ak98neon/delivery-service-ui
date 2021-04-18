import {Component, OnInit} from '@angular/core';
import {OrderListService} from '../../../service/order.list.service.service';

export interface Order {
    name: string;
    price: number;
    count: number;
    imgUrl: string;
}

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    orderList: Order[] = [];
    totalPrice = 0;

    constructor(private orderService: OrderListService) {
    }

    ngOnInit(): void {
        // this.orderService.fetchUserOrders()
        //     .subscribe(orders => this.orderList = orders.map(product => productsToProductTiles(product)));
    }

}
