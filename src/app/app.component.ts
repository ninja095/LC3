import {Component, inject} from '@angular/core';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 0;
  title = 'LC1';

  productsService = inject(ProductsService);

  products$ = this.productsService.getProducts()

  viewType = 'list';


}
