import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit  {
  http = inject(HttpClient);
product : any =[];

 ngOnInit(){
this.fetchData()
 }
 fetchData(){
this.http.get('https://fakestoreapi.com/products?_limit=10')
.subscribe((product:any)=>{
  console.log(product)

})

 }

}
