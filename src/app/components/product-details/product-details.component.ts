import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductModel;

  public constructor(
    private productsServices: ProductsService,
    private route: ActivatedRoute
  ) {} // DI

  public async ngOnInit() {
    try {
      const id = +this.route.snapshot.paramMap.get('id');
      this.product = await this.productsServices.getSingleProduct(id);
    } catch (error) {}
    console.log(this.product);
  }

  addToCart() {
    console.log('yo');
  }
}
