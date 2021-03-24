import {Component, OnInit} from '@angular/core';

export interface Tile {
    cols: number;
    rows: number;
    text: string;
    imgUrl: string;
}

@Component({
    selector: 'app-manu-component',
    templateUrl: './manu-component.component.html',
    styleUrls: ['./manu-component.component.scss']
})
export class ManuComponentComponent implements OnInit {

    constructor() {
    }

    tiles: Tile[] = [
        {text: 'Pizza', cols: 1, rows: 1, imgUrl: 'assets/icons/food/pizza.png'},
        {text: 'Burger', cols: 1, rows: 1, imgUrl: 'assets/icons/food/hamburger.png'},
        {text: 'Hotdog', cols: 1, rows: 1, imgUrl: 'assets/icons/food/hotdog.png'},
        {text: 'Taco', cols: 1, rows: 1, imgUrl: 'assets/icons/food/taco.png'},
        {text: 'Snack', cols: 1, rows: 1, imgUrl: 'assets/icons/food/snacks.png'},
        {text: 'Drink', cols: 1, rows: 1, imgUrl: 'assets/icons/food/juice.png'},
    ];

    ngOnInit(): void {
    }

}
