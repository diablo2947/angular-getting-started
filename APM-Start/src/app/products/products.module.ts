import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProductDetailGuard } from './product-detail.guard';
import { ProductsDetailComponent } from './products-detail.component';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ ProductListComponent, ProductsDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductsDetailComponent
      }
    ])
  ]
})
export class ProductsModule { }
