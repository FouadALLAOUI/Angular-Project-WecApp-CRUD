import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "https://fakestoreapi.com/";

  constructor(
    private http: HttpClient 
  ) { }

  getAllProductsWithLimit(limit: number = 5) {
    //const productsUrl = this.baseUrl + 'products?limit='+limit;
    const productsUrl = `${this.baseUrl} + 'products?limit='+${limit}`;
    console.log(this.http.get(productsUrl))
    return this.http.get<any>(productsUrl);
  }





}