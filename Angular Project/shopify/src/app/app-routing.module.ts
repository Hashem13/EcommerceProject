import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CartScreenComponent } from './cart-screen/cart-screen.component';
import { SingleProductScreenComponent } from './single-product-screen/single-product-screen.component';
const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'single-product-screen', component: SingleProductScreenComponent },
  { path: 'cart-screen', component: CartScreenComponent },
  { path: 'login-screen', component: LoginScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
