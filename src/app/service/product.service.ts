import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../shared/IProduct';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    fetchTopProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${environment.apiUrl}/products/top`);
    }
}
