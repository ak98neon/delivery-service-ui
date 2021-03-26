import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../shared/IProduct';
import {ProductService} from '../../service/product.service';

export interface Tile {
    cols: number;
    rows: number;
    text: string;
    imgUrl: string;
}

function productsToProductTiles(product: IProduct): Tile {
    return {cols: 1, rows: 1, imgUrl: product.imgUrl, text: product.name};
}

@Component({
    selector: 'app-manu-component',
    templateUrl: './manu-component.component.html',
    styleUrls: ['./manu-component.component.scss']
})
export class ManuComponentComponent implements OnInit {

    productsMenu: Tile[];

    constructor(private productService: ProductService) {
        this.productsMenu = [];
    }

    ngOnInit(): void {
        this.productService.fetchTopProducts()
            .subscribe(products => this.productsMenu = products.map(product => productsToProductTiles(product)));
    }

}
