import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "about", component: AboutComponent},
    {path: "", component: HomeComponent},
    {path: "**", component: NotFoundComponent},

];
