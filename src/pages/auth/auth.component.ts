
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background-light dark:bg-background-dark font-sans transition-colors duration-300 min-h-screen flex flex-col items-center justify-center p-4 luxury-gradient animate-page-enter">

      <header class="text-center mb-10">
        <div class="flex flex-col items-center space-y-4">
          <div class="relative">
            <div class="w-16 h-16 rounded-full border-2 border-gold/60 flex items-center justify-center">
                <span class="font-serif text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#b8952a]">M</span>
            </div>
            <div class="absolute -inset-4 bg-primary/5 blur-2xl rounded-full -z-10"></div>
          </div>
          <h1 class="font-serif text-4xl md:text-5xl text-white">Mavluda Beauty</h1>
          <p class="font-accent text-[10px] md:text-xs tracking-[0.3em] text-primary uppercase font-bold">Medical Luxury Ecosystem</p>
        </div>
      </header>

      <main class="w-full max-w-[440px]">
        <div class="bg-white dark:bg-card-dark border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div class="flex border-b border-gray-200 dark:border-white/10">
            <button 
              (click)="setRole('client')"
              class="flex-1 py-4 text-sm font-semibold transition-all"
              [class]="authService.currentUserRole() === 'client' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'">
              Client Portal
            </button>
            <button 
              (click)="setRole('admin')"
              class="flex-1 py-4 text-sm font-medium transition-all"
              [class]="authService.currentUserRole() === 'admin' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'">
              Admin Access
            </button>
          </div>
          <div class="p-8">
            <form class="space-y-6" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300" for="email">Email Address</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                  <input class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 transition-all" 
                    id="email" 
                    placeholder="admin@mavluda.beauty" 
                    type="email"
                    formControlName="email"/>
                </div>
              </div>

              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300" for="password">Password</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">lock</span>
                  <input class="w-full pl-12 pr-12 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 transition-all" 
                    id="password" 
                    [type]="showPassword() ? 'text' : 'password'"
                    formControlName="password"/>
                  <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors" type="button" (click)="togglePassword()">
                    <span class="material-symbols-outlined text-[20px]">{{ showPassword() ? 'visibility_off' : 'visibility' }}</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center space-x-2 cursor-pointer group">
                  <input class="w-4 h-4 rounded border-gray-300 dark:border-white/20 text-primary focus:ring-primary bg-transparent" type="checkbox" formControlName="rememberMe"/>
                  <span class="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">Remember me</span>
                </label>
                <a class="text-primary font-medium hover:underline decoration-primary/30" href="#">Forgot password?</a>
              </div>

              <button class="w-full bg-primary hover:bg-[#C5A02E] text-black py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.01] active:scale-[0.98] btn-glow disabled:opacity-70 disabled:cursor-wait btn-primary-shimmer" type="submit" [disabled]="isLoading()">
                @if (isLoading()) {
                    <svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing In...</span>
                } @else {
                  <span>Sign In</span>
                  <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                }
              </button>

              <div class="relative py-2 flex items-center">
                <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
                <span class="flex-shrink mx-4 text-gray-400 text-[10px] uppercase tracking-widest font-accent">Or</span>
                <div class="flex-grow border-t border-gray-200 dark:border-white/10"></div>
              </div>

              <button (click)="continueWithTelegram()" class="w-full glass-telegram text-gray-800 dark:text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.01] active:scale-[0.99]" type="button">
                <svg class="w-5 h-5 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.35-1.77 4.84-1.78.11 0 .35.03.5.16.12.1.16.24.18.33.02.08.02.24.01.41z"></path>
                </svg>
                <span class="text-sm font-sans tracking-tight">Continue with Telegram</span>
              </button>
            </form>
          </div>

          <div class="px-8 py-4 bg-gray-50/50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 text-center">
            <p class="text-[11px] text-gray-500 dark:text-gray-500 tracking-wide uppercase font-accent">
              Secure Access • End-to-End Encrypted
            </p>
          </div>
        </div>

        <div class="mt-8 flex justify-center space-x-6">
          <button (click)="toggleTheme()" class="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2 text-sm">
            <span class="material-symbols-outlined text-[18px]">dark_mode</span>
            <span>Switch Theme</span>
          </button>
          <div class="text-gray-700 dark:text-gray-600">|</div>
          <button class="text-gray-400 hover:text-primary transition-colors text-sm">English (UK)</button>
        </div>
      </main>

      <footer class="mt-auto py-8 text-center text-gray-400 text-xs">
        <p>© 2024 Mavluda Azizova. All rights reserved.</p>
      </footer>
    </div>
  `
})
export class AuthComponent {
  private fb: FormBuilder = inject(FormBuilder);
  // Fix: Add explicit type `Router` to injected router.
  private router: Router = inject(Router);
  public authService = inject(AuthService);
  // Fix: Add explicit type `Document` to injected document.
  private document: Document = inject(DOCUMENT);
  
  isLoading = signal(false);
  showPassword = signal(false);

  loginForm = this.fb.group({
    email: ['admin@mavluda.beauty', [Validators.required, Validators.email]],
    password: ['password123', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });

  setRole(role: 'admin' | 'client') {
    this.authService.currentUserRole.set(role);
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  toggleTheme() {
    this.document.documentElement.classList.toggle('dark');
  }

  continueWithTelegram() {
    console.log("Triggering Telegram login flow...");
    // This could potentially redirect to a Telegram auth URL if not in the app.
    // For now, the main auto-login flow in AuthService handles the in-app case.
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
      }, 1500);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
