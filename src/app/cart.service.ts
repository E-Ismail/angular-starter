import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];
  addTocart(product){
    this.items.push(product);
    window.alert("You product has been added!");
  }
  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

    getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
    private http:HttpClient,
  ) { }

}