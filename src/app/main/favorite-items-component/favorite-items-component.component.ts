import {Component, OnInit} from '@angular/core';

export interface FavoriteItem {
    name: string;
    imgUrl: string;
    ratingImgUrl: string;
    price: number;
    rating: number;
}

@Component({
    selector: 'app-favorite-items-component',
    templateUrl: './favorite-items-component.component.html',
    styleUrls: ['./favorite-items-component.component.scss']
})
export class FavoriteItemsComponentComponent implements OnInit {

    constructor() {
    }

    items: FavoriteItem[] = [
        {
            name: 'Mushroom Pizza',
            imgUrl: 'url(assets/img/transparent-pizza.png)',
            price: 7.49,
            rating: 5,
            ratingImgUrl: 'url(assets/icons/ratings/heart.png)'
        },
        {
            name: 'Mushroom Pizza',
            imgUrl: 'url(assets/img/transparent-pizza.png)',
            price: 7.49,
            rating: 5,
            ratingImgUrl: 'url(assets/icons/ratings/hot.png)'
        },
        {
            name: 'Mushroom Pizza',
            imgUrl: 'url(assets/img/transparent-pizza.png)',
            price: 7.49,
            rating: 5,
            ratingImgUrl: 'url(assets/icons/ratings/star.png)'
        }
    ];

    ngOnInit(): void {
    }

}
