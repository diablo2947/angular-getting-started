import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent implements OnInit {
  private _listFilter: string = '';

  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  ngOnInit(): void {
    this.listFilter = '';
    this.sub = this.productService.getProducts().subscribe({
      next: (x) => {
        this.products = x;
        this.filteredProducts = this.products;
      },
      error: (y) => (this.errorMessage = y),
    });
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('Setter called');
    this.filteredProducts = this.performFilter(value);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  changeRating(rating: number): void {
    this.pageTitle = this.pageTitle + ` The rating ${rating} was selected!`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
