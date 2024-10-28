import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  // create new object for 2-way binding  (must)
  public product: ProductModel = new ProductModel();

  // DI:
  public constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  public onFileSelected(e: Event): void {
    const fileInput = e.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.product.image = fileInput.files[0];
    }
  }
  public async send() {
    try {
      // console.log(this.product);
      // return;

      await this.productsService.addProduct(this.product);
      alert('products had been added');

      // redirect back to products
      this.router.navigateByUrl('/products');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
