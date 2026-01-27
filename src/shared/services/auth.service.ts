
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TelegramService } from './telegram.service';

export type UserRole = 'admin' | 'client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Fix: Add explicit type `Router` to injected router.
  private router: Router = inject(Router);
  private telegramService = inject(TelegramService);

  currentUserRole = signal<UserRole>('client'); // Default to client for safety
  isGlobalLoading = signal<boolean>(true); // Start loading to check for Telegram context
  isAuthenticated = signal<boolean>(false);

  constructor() {
    // Initial check is done in AppComponent to ensure view is ready
  }

  toggleRole() {
    this.currentUserRole.update(role => role === 'admin' ? 'client' : 'admin');
  }

  async checkTelegramAuth() {
    this.isGlobalLoading.set(true);

    if (this.telegramService.isTelegram && this.telegramService.initData) {
      // TELEGRAM NATIVE FLOW
      console.log('Telegram Context Detected. Attempting Auto-Login...');
      const success = await this.loginWithTelegram(this.telegramService.initData);
      
      if (success) {
        this.isAuthenticated.set(true);
        // Redirect based on role
        if (this.currentUserRole() === 'admin') {
           this.router.navigate(['/admin/dashboard']);
        } else {
           this.router.navigate(['/user/home']);
        }
      } else {
        // Fallback to normal login if TG auth fails
        this.isAuthenticated.set(false);
        this.router.navigate(['/auth']);
      }
    } else {
      // WEB BROWSER FLOW
      console.log('No Telegram Context. Showing Standard Login.');
      this.isAuthenticated.set(false);
      // Wait a moment to show the luxury loading animation because it looks good
      setTimeout(() => {
        // If we are at root, go to auth. If deep linking, we might want to preserve URL (not implemented for MVP)
         if (this.router.url === '/') {
           this.router.navigate(['/auth']);
         }
         this.isGlobalLoading.set(false);
      }, 1500);
      return;
    }
    
    this.isGlobalLoading.set(false);
  }

  async loginWithTelegram(initData: string): Promise<boolean> {
    // IN REAL APP: Send initData to NestJS Backend here
    // return this.http.post('/api/auth/telegram', { initData }).toPromise();

    // MOCK MVP IMPLEMENTATION:
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate checking initData
        const user = this.telegramService.user;
        if (user) {
          console.log('Authenticated Telegram User:', user);
          
          // MOCK ROLE ASSIGNMENT
          // In real app, backend tells us the role.
          // Here, we hardcode 'admin' for specific IDs or usernames for testing
          if (user.username === 'mavluda_admin' || user.id === 12345678) {
            this.currentUserRole.set('admin');
          } else {
            this.currentUserRole.set('client');
          }
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }

  login() {
    // Manual Login (Web)
    this.isAuthenticated.set(true);
    return true;
  }
}
