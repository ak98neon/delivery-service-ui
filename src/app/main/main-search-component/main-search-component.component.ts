import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-main-search-component',
    templateUrl: './main-search-component.component.html',
    styleUrls: ['./main-search-component.component.scss']
})
export class MainSearchComponentComponent implements OnInit {

    value = 'Search by food name';

    checkoutForm = this.formBuilder.group({
        name: ''
    });

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        // Process checkout data here
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
    }
}
