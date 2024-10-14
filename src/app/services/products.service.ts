import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ProductModel } from '../models/product.model';
import {firstValueFrom} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  async getAllProducts(){
    const observer = this.http.get<ProductModel[]>(environment.productsUrl);
    const products = await firstValueFrom(observer);
    return products;
  }
}
