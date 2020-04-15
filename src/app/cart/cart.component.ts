import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems;
checkoutForm;
  constructor(
    private cart:CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:'',
    });
   }

  ngOnInit() {
       this.cartItems = this.cart.getItems();
  }

  clearCart(){
    this.cart.clearCart();
    window.alert("Cart Items are cleared!");
    
  }

    onSubmit(customerData) {
    // Process checkout data here
    this.cartItems = this.cart.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', 
    customerData);
  }

}
