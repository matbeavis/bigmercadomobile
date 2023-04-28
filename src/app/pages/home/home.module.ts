import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { ProductCardModule } from 'src/app/components/product-card/product-card.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CategoryItemModule,
    ProductCardModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
