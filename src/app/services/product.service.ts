import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

// HttpClient for making HTTP requests
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = environment.baseURLAPI

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  // Get All Products
  getAllProducts() {
    return this.http.get(
      this.apiURL + 'products', 
      this.httpOptions
    )
  }
}
