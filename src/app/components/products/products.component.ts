import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
//   providers: [ProductsService]
})
export class ProductsComponent implements OnDestroy, OnInit {    

    products: ProductModel[];

    constructor(private productService: ProductsService){}

    async ngOnInit(): Promise<void> {
        this.products = await this.productService.getAllProducts();
    }

    ngOnDestroy(): void {
        // this.title.setTitle("MyProject")
    }
    
}
