import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"products/add",component:AddProductComponent},
      {path:"products/id",component:DetailProductComponent},
      {path:"products",component:ListProductComponent}
    ])
  ]
})
export class ProductsModule { }
