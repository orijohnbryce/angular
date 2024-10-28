import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "product-details/:id", component: ProductDetailsComponent},
    {path: "about", component: AboutComponent},
    {path: "add-product", component: AddProductComponent},
    {path: "", component: HomeComponent},
    {path: "**", component: NotFoundComponent},

];
