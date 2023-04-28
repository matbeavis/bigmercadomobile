import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    CategoryItemModule,
    ProductCardModule,
  ],
  declarations: [DetailPage],
})
export class DetailPageModule {}
