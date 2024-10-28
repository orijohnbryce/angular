import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;

    constructor(
        private prodcutService: ProductsService,
        private route: ActivatedRoute
    ) { }

    async ngOnInit(): Promise<void> {
        const id = +this.route.snapshot.paramMap.get('id');
        this.product = await this.prodcutService.getSingleProduct(id);

        console.log(this.product);
        
    }

}
