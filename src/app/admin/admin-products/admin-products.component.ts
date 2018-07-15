import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any[];
  //products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    //From the MAP operator along with the Pipe, its the template code used for fetching objects in the subtree of the firebase Database. so copy as it is for that purpose.
    this.subscription = this.productService.getAll().pipe(
      map(changes => { return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); }))
      .subscribe(products => {
        this.filteredProducts = this.products = products;
      });
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) ) :
      this.products;
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
