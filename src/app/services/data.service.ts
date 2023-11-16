import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly SESSION_STORAGE_KEY = 'appData';

  private appData = JSON.parse(
    sessionStorage.getItem(this.SESSION_STORAGE_KEY)
  ) || {
    users: [],
    products: [],
  };

  constructor() {}

  getUsers(): any[] {
    return this.appData.users;
  }

  addUser(user: any): void {
    this.appData.users.push(user);
    this.saveDataToSessionStorage();
  }

  getProducts(): any[] {
    return this.appData.products;
  }

  addProduct(product: any): void {
    this.appData.products.push(product);
    this.saveDataToSessionStorage();
  }

  private saveDataToSessionStorage(): void {
    sessionStorage.setItem(
      this.SESSION_STORAGE_KEY,
      JSON.stringify(this.appData)
    );
  }
}
