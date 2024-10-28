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

  async getSingleProduct(id: number): Promise<ProductModel>{
    
    const res = await fetch(environment.productsUrl + id)        
    const resJ = await res.json();
    return resJ;
    
    const observer = this.http.get<ProductModel>(environment.productsUrl + id);
    const product = await firstValueFrom(observer);
    return product;
  }
  
  // async addProduct(product:ProductModel): Promise<void> {
  //   const observer = this.http.post<ProductModel>(environment.productsUrl, product);
    
  //   const addedProduct = await firstValueFrom(observer);        
  //   // save added product to global-state on redux, or localstorage etc.
  // }
  
  async addProduct(product: ProductModel): Promise<void> {
    
    // convert product to FormData (which can handle Blob - binary load object)
    const formData = new FormData();
    
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("stock", product.stock.toString());

    formData.append("image", product.image); // The file itself
    
    // formData.append("imageUrl", product.imageUrl);
  
    const observer = this.http.post<ProductModel>(environment.productsUrl, formData);
    const addedProduct = await firstValueFrom(observer);
  }
  
}
