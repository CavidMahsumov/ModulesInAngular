import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddCustomerComponent,
    ListCustomerComponent,
    DetailCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // {path:"customers/add",component:AddCustomerComponent},
      // {path:"customers/id",component:DetailCustomerComponent},
      // {path:"customers",component:ListCustomerComponent}
    ])
  ]
})
export class CustomersModule { }
