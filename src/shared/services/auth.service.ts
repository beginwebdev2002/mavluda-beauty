
import { Injectable, signal } from '@angular/core';

export type UserRole = 'admin' | 'client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Defaulting to admin for MVP purposes, but this would normally be null until login
  currentUserRole = signal<UserRole>('admin');

  toggleRole() {
    this.currentUserRole.update(role => role === 'admin' ? 'client' : 'admin');
  }

  login() {
    // Logic to authenticate
    return true;
  }
}
