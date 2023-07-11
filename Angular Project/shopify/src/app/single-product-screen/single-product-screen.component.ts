import { Component, OnInit } from '@angular/core';
import { SingleProductService } from '../services/single-product.service';

@Component({
  selector: 'app-single-product-screen',
  templateUrl: './single-product-screen.component.html',
  styleUrls: ['./single-product-screen.component.css']
})
export class SingleProductScreenComponent implements OnInit {

  product:any;
  constructor(private service:SingleProductService){}
  ngOnInit() {
    this.service.getProd()
      .subscribe(response => {
        this.product = response;
        console.log(this.product);
      });
  }
}