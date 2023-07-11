import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItems: CartItem[] = [];
}
