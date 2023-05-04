import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  /* `products: Product[] = [];` is declaring a variable named `products` of type `Product[]` (an array
  of `Product` objects) and initializing it with an empty array `[]`. This variable will be used to
  store the list of products that will be displayed in the component's template. */
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.all().subscribe((products) => {
      this.products = products;
    });
  }

  productDel(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }
}
