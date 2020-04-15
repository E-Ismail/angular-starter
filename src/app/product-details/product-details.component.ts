import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route:ActivatedRoute,
    private cart:CartService,
  ) { }

  ngOnInit() {
    //subsribing the route
    this.route.paramMap.subscribe(param=>{
      this.product= products[+param.get('productId')];
    });
  }

  buy(product){
console.log(this.product);
this.cart.addTocart(product);
  }

}