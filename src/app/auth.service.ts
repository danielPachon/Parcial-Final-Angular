import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    {
      email: 'admin@example.com',
      password: '123',
      role: 'admin',
      name: 'Daniel',
      gender: 'male'
    },
    {
      email: 'cliente@example.com',
      password: '123',
      role: 'cliente',
      name: 'Steven',
      gender: 'female'
    },
    {
      email: 'invitado@example.com',
      password: '123',
      role: 'invitado',
      name: 'Mariana',
    },
  ];

  private currentUser: any = null;

  login(email: string, password: string): string | null {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return user.role;
    }

    return null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
