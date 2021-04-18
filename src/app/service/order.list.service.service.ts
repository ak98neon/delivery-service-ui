import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IOrder} from '../shared/IOrder';

@Injectable({
    providedIn: 'root'
})
export class OrderListService {

    constructor(private http: HttpClient) {
    }

    fetchUserOrders(): Observable<IOrder[]> {
        return this.http.get<IOrder[]>(`${environment.apiUrl}/orders`);
    }
}
