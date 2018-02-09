import { Component } from '@angular/core';

import { Product } from './product.model'
/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'app-root',
  template: `
    <div class="inventory-app">
      (Products will go here soon)
    </div>
  `
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men','Accessories','Hats'],
      29.99
    )
  }
}
