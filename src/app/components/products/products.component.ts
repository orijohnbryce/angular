import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
//   providers: [ProductsService]
})
export class ProductsComponent implements OnDestroy, OnInit {    

    products: ProductModel[];

    constructor(private title: Title, private productService: ProductsService){        
        this.title.setTitle("MySite | products");        
    }

    async ngOnInit(): Promise<void> {
        this.products = await this.productService.getAllProducts();
    }

    ngOnDestroy(): void {
        this.title.setTitle("MyProject")
    }
    
}
