import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SingleProductScreenComponent } from './single-product-screen/single-product-screen.component';
import { CartScreenComponent } from './cart-screen/cart-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    HomeScreenComponent,
    SingleProductScreenComponent,
    CartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
