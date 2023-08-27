import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../Product';
import { ProductServiceService } from '../product-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products : Product[] = []
  subscription: Subscription | undefined
  $productData: Observable<Product> | undefined ;

  constructor(private productService: ProductServiceService) {
    this.subscription = productService.getProducts().subscribe(response => {
      this.products = response
    })

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

 
}
