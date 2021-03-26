import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    cardNumber: string;
    cardHolder: string;
    expires: string;
    secretCode: string;

    constructor() {
        this.cardNumber = '**** **** **** 6258';
        this.cardHolder = 'Artem Kudria';
        this.expires = '10/25';
        this.secretCode = '000';
    }

    ngOnInit(): void {
    }

}
