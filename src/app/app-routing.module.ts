import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/Products/add-product/add-product.component';
import { DetailProductComponent } from './components/Products/detail-product/detail-product.component';
import { ListProductComponent } from './components/Products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customers/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"products",loadChildren : ()=> import("../app/components/Products/products.module").then(m=>m.ProductsModule)},
  {path:"customers",loadChildren : ()=> import("../app/components/customers/customers.module").then(m=>m.CustomersModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
