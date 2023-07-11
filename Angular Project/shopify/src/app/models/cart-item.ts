export class CartItem {
    id:any;
    price:any;
    title: any;
    description:any;
    image:any;
  
    fromObject(prod:any){
      this.id = prod.id;
      this.price = prod.price;
      this.title = prod.title;
      this.description = prod.description;
      this.image = prod.image;
    }
  
    toString (){
      console.log("the Item : " + this.title + " has the id of :" + this.id);
    }
  }