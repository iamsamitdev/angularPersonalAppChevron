import { Component } from '@angular/core';

// Import the ProductService
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(
    private product: ProductService
  ) { }

  // สร้างตัวแปรไว้เก็บค่าข้อมูลสินค้าที่ได้จาก API
  products: any = []

  ngOnInit() {
    // อ่านข้อมูลสินค้าทั้งหมดจาก API
    this.product.getAllProducts().subscribe((data: any) => {
      console.log(data)
      this.products = data
    })
  }

}
