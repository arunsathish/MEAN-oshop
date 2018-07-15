import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any[]>;
  product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {

    //From the MAP operator along with the Pipe,its the template code used for fetching objects in the subtree of the firebase Database. so copy as it is for that purpose.
    this.categories$ = categoryService.getCategories().pipe(
      map(changes => { return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })); }));

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);

  }

  save(product) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Are you sure of Deleting the Product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
