
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      
      <!-- Ambient Luxury Glow -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div class="w-full max-w-md relative z-10 animate-slide-up">
        
        <!-- Brand Identity -->
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-br from-gold to-gold-600 rounded-full p-[1px] mx-auto mb-6 shadow-gold-lg">
            <div class="w-full h-full bg-dark-surface rounded-full flex items-center justify-center border border-gold/20">
               <span class="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">M</span>
            </div>
          </div>
          <h1 class="text-4xl font-serif text-white mb-2 tracking-tight">Mavluda Beauty</h1>
          <p class="text-gold-300 text-xs font-medium uppercase tracking-[0.3em]">Medical Luxury Ecosystem</p>
        </div>

        <!-- Glass Card -->
        <div class="bg-dark-surface/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          
          <!-- Role Tabs -->
          <div class="flex border-b border-white/5">
             <button 
               (click)="setRole('client')"
               class="flex-1 py-4 text-sm font-medium transition-all duration-300 relative group"
               [class.text-gold]="authService.currentUserRole() === 'client'"
               [class.text-gray-500]="authService.currentUserRole() !== 'client'"
             >
               Client Portal
               @if(authService.currentUserRole() === 'client') {
                 <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gold shadow-[0_-2px_6px_rgba(212,175,55,0.5)]"></div>
               }
             </button>
             <button 
               (click)="setRole('admin')"
               class="flex-1 py-4 text-sm font-medium transition-all duration-300 relative group"
               [class.text-gold]="authService.currentUserRole() === 'admin'"
               [class.text-gray-500]="authService.currentUserRole() !== 'admin'"
             >
               Admin Access
               @if(authService.currentUserRole() === 'admin') {
                 <div class="absolute bottom-0 left-0 w-full h-[2px] bg-gold shadow-[0_-2px_6px_rgba(212,175,55,0.5)]"></div>
               }
             </button>
          </div>

          <div class="p-8 space-y-6">
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <!-- Email Input (Flowbite Pro Style) -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-500 group-focus-within:text-gold transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <input 
                    id="email" 
                    type="email" 
                    formControlName="email"
                    class="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg leading-5 bg-dark-card text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold focus:shadow-gold-sm transition-all duration-200 sm:text-sm"
                    placeholder="name@company.com"
                  >
                </div>
                @if (loginForm.get('email')?.touched && loginForm.get('email')?.invalid) {
                   <p class="text-xs text-red-400 mt-1">Please enter a valid email address.</p>
                }
              </div>

              <!-- Password Input -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
                <div class="relative group">
                   <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-500 group-focus-within:text-gold transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <input 
                    id="password" 
                    [type]="showPassword() ? 'text' : 'password'" 
                    formControlName="password"
                    class="block w-full pl-10 pr-10 py-3 border border-gray-700 rounded-lg leading-5 bg-dark-card text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold focus:shadow-gold-sm transition-all duration-200 sm:text-sm"
                    placeholder="••••••••"
                  >
                  <button 
                    type="button"
                    (click)="togglePassword()"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                     @if (showPassword()) {
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                     } @else {
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                     }
                  </button>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" type="checkbox" class="h-4 w-4 bg-dark-card border-gray-600 rounded text-gold focus:ring-offset-dark focus:ring-gold cursor-pointer">
                  <label for="remember-me" class="ml-2 block text-sm text-gray-400">Remember me</label>
                </div>
                <a href="#" class="text-sm font-medium text-gold hover:text-white transition-colors">Forgot password?</a>
              </div>

              <!-- Shimmer Button -->
              <button 
                type="submit" 
                [disabled]="isLoading()"
                class="relative w-full overflow-hidden group bg-gradient-to-r from-gold via-[#E5C565] to-gold text-dark font-bold py-3.5 px-4 rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <!-- Shimmer Effect Overlay -->
                <div class="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"></div>
                
                <span class="relative z-20 flex items-center justify-center gap-2">
                   @if (isLoading()) {
                    <svg class="animate-spin h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Authenticating...</span>
                   } @else {
                    <span>Sign In</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                   }
                </span>
              </button>
            </form>
          </div>
          
          <div class="bg-dark-surface/80 border-t border-white/5 p-4 text-center">
            <p class="text-xs text-gray-500">Secure Access • End-to-End Encrypted</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AuthComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private router = inject(Router);
  public authService = inject(AuthService);
  
  isLoading = signal(false);
  showPassword = signal(false);

  loginForm = this.fb.group({
    email: ['admin@mavluda.beauty', [Validators.required, Validators.email]],
    password: ['password123', [Validators.required, Validators.minLength(6)]]
  });

  setRole(role: 'admin' | 'client') {
    this.authService.currentUserRole.set(role);
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      // Simulate API call
      setTimeout(() => {
        this.isLoading.set(false);
        const role = this.authService.currentUserRole();
        if (role === 'admin') {
            this.router.navigate(['/admin/dashboard']);
        } else {
            this.router.navigate(['/user/home']);
        }
      }, 1500); // Slightly longer to show off the animation
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
