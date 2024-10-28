import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { ActivatedRoute, RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;

    public tooltip = "This is test"

    constructor(
        private prodcutService: ProductsService,
        private route: ActivatedRoute,        
    ) { }

    async ngOnInit(): Promise<void> {
        const id = +this.route.snapshot.paramMap.get('id');
        this.product = await this.prodcutService.getSingleProduct(id);
    }

    addToCart(){
        // todo: add...
        
        alert("Product Added!");
    }
}
