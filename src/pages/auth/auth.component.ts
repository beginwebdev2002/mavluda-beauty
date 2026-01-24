
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Inline template used to ensure functionality in Applet environment while maintaining clean separation
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F0] to-[#EAE0C8] p-4">
      <div class="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/40">
        
        <!-- Luxury Header -->
        <div class="p-8 pb-0 text-center">
          <div class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gold">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 class="text-3xl text-gray-900 mb-2">Mavluda Beauty</h1>
          <p class="text-gray-500 font-sans text-sm tracking-wide uppercase">Medical Luxury Ecosystem</p>
        </div>

        <!-- Login Form -->
        <div class="p-8 pt-6">
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
            
            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <div class="relative">
                <input 
                  id="email" 
                  type="email" 
                  formControlName="email"
                  class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-gold focus:border-gold transition-all duration-200 outline-none placeholder-gray-400"
                  placeholder="admin@mavluda.beauty"
                >
                @if (loginForm.get('email')?.touched && loginForm.get('email')?.invalid) {
                  <div class="absolute right-3 top-3 text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                  </div>
                }
              </div>
            </div>

            <!-- Password Input -->
            <div class="space-y-2">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="relative">
                <input 
                  id="password" 
                  [type]="showPassword() ? 'text' : 'password'" 
                  formControlName="password"
                  class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:ring-gold focus:border-gold transition-all duration-200 outline-none placeholder-gray-400"
                  placeholder="••••••••"
                >
                <button 
                  type="button"
                  (click)="togglePassword()"
                  class="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  @if (showPassword()) {
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                  } @else {
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" type="checkbox" class="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded cursor-pointer accent-gold">
                <label for="remember-me" class="ml-2 block text-sm text-gray-600 cursor-pointer">Remember me</label>
              </div>
              <a href="#" class="text-sm font-medium text-gold hover:text-gold-dark transition-colors">Forgot password?</a>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              [disabled]="isLoading()"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              @if (isLoading()) {
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              } @else {
                Sign In
              }
            </button>
          </form>
        </div>

        <div class="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p class="text-xs text-gray-500">
            Protected by <span class="font-semibold text-gray-700">Mavluda Security</span>. © 2024
          </p>
        </div>
      </div>
    </div>
  `
})
export class AuthComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  isLoading = signal(false);
  showPassword = signal(false);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      // Simulate API call
      setTimeout(() => {
        this.isLoading.set(false);
        this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
