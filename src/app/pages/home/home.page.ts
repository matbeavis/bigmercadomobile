import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories!: Category[];
  products!: Product[];

  slidesOptions = {
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 4.2,
    slidesOffsetBefore: 0,
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  async ngOnInit() {
    this.categories = await this.categoryService.getAll();
    this.products = await this.productService.getAll();
  }
}
