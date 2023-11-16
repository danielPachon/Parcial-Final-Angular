import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly SESSION_STORAGE_KEY = 'authData';

  private authData = {
    isAuthenticated: false,
    user: null,
  };

  constructor() {
    const storedAuthData = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (storedAuthData) {
      this.authData = JSON.parse(storedAuthData);
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.authData.isAuthenticated = true;
      this.authData.user = {
        username: username,
        role: 'admin',
      };
      sessionStorage.setItem(
        this.SESSION_STORAGE_KEY,
        JSON.stringify(this.authData)
      );
      return true;
    } else if (username === 'client' && password === 'client') {
      this.authData.isAuthenticated = true;
      this.authData.user = {
        username: username,
        role: 'client',
      };
      sessionStorage.setItem(
        this.SESSION_STORAGE_KEY,
        JSON.stringify(this.authData)
      );
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.authData.isAuthenticated = false;
    this.authData.user = null;
    sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return this.authData.isAuthenticated;
  }

  hasRole(expectedRole: string): boolean {
    return this.authData.user && this.authData.user.role === expectedRole;
  }

  getUser(): any {
    return this.authData.user;
  }
}
