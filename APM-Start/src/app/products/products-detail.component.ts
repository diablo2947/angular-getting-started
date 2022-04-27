import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  pageTitle: string = 'Details for product: ';
  products: IProduct[] = [];
  product: IProduct | undefined;
  sub!: Subscription;

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.sub = this.productService.getProducts().subscribe({
      next: x=> this.product = x.find(y=>y.productId===id)
    })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
