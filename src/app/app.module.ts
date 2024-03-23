import { CustomModule } from './custom/custom.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/Products/add-product/add-product.component';
import { DetailProductComponent } from './components/Products/detail-product/detail-product.component';
import { ListProductComponent } from './components/Products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customers/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
