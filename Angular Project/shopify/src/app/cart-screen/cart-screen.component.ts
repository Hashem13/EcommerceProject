import { Component } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.css']
})
export class CartScreenComponent {
 
  constructor(private dataService: DataService) {}
  
  get data() {
    
    return this.dataService.cartItems;
    
  }
   total:Number =0;
   ngOnInit(){
    this.data.forEach(prod => {
       this.total+= prod.price;
    });
    console.log(this.total);
  }
 
}
