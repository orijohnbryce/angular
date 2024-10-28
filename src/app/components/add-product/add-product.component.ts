import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import {FormsModule} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

    public product: ProductModel = new ProductModel();

    constructor(private productsService: ProductsService){}

    async handleAdd(){
        await this.productsService.addProduct(this.product);
        // console.log(this.product);
        
        alert("Product Added");
    }

    public onImageSelected(e: Event): void {
        const fileInput = e.target as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]){
            this.product.image = fileInput.files[0];
        }
    }
}
