import { Component ,Input,OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartItem } from '../models/cart-item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})

export class HomeScreenComponent implements OnInit {
  products: any;
  cartItems: CartItem[] = [];
  
  constructor( private service:ProductsService,private dataService: DataService) {}
   
  ngOnInit() {
    this.service.getProducts()
      .subscribe(response => {
        this.products = response;
        // console.log(this.products);
      });
}
  AddToCart(prod:object){
     
    let newItem = new CartItem();
    newItem.fromObject(prod);
    this.cartItems.push(newItem);
    this.setData();
    // console.log(this.cartItems[0].toString());
    window.alert("The item was added to the cart")
  }
  
  setData() {
    this.dataService.cartItems=this.cartItems;
  }

}
