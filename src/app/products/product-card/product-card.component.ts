import { Component, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined
  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  onDelete():void{
    if(this.product){
      this.productService.deleteProduct(this.product.id)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/products/home')
        }
      })
      
    }
  }
}
