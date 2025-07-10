import {Component, inject, Input} from '@angular/core';
import {Product, ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() products: Product[] | null = null;
}
