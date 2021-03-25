import {Component, OnInit} from '@angular/core';

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

    constructor() {
    }

    orderList: Order[] = [
        {name: 'Mushroom Pizza', count: 1, price: 7.99, imgUrl: 'url(assets/img/transparent-pizza.png)'},
        {name: 'Mushroom Pizza', count: 1, price: 7.99, imgUrl: 'url(assets/img/transparent-pizza.png)'},
        {name: 'Mushroom Pizza', count: 1, price: 7.99, imgUrl: 'url(assets/img/transparent-pizza.png)'}
    ];

    ngOnInit(): void {
    }

}
