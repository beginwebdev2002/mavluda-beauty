
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LanguageSwitcherComponent } from '../../features/language-selection/language-switcher.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
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
  isDarkMode = signal(this.document.documentElement.classList.contains('dark'));
  
  // 'signin' or 'signup' mode
  authMode = signal<'signin' | 'signup'>('signin');

  loginForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: [''],
    email: ['admin@mavluda.beauty', [Validators.required, Validators.email]],
    password: ['password123', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });

  setAuthMode(mode: 'signin' | 'signup') {
    this.authMode.set(mode);
    const firstNameControl = this.loginForm.get('firstName');
    const lastNameControl = this.loginForm.get('lastName');
    const phoneControl = this.loginForm.get('phone');

    if (mode === 'signup') {
      firstNameControl?.setValidators([Validators.required]);
      lastNameControl?.setValidators([Validators.required]);
      phoneControl?.setValidators([Validators.required]);

      // Clear defaults for signup
      if (this.loginForm.get('email')?.value === 'admin@mavluda.beauty') {
        this.loginForm.patchValue({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: ''
        });
      }
    } else {
      firstNameControl?.clearValidators();
      lastNameControl?.clearValidators();
      phoneControl?.clearValidators();

      // Restore default admin credentials for demo convenience if empty
      if (!this.loginForm.get('email')?.value) {
        this.loginForm.patchValue({
          email: 'admin@mavluda.beauty',
          password: 'password123'
        });
      }
    }
    firstNameControl?.updateValueAndValidity();
    lastNameControl?.updateValueAndValidity();
    phoneControl?.updateValueAndValidity();
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  toggleTheme() {
    this.document.documentElement.classList.toggle('dark');
    this.isDarkMode.set(this.document.documentElement.classList.contains('dark'));
  }

  continueWithTelegram() {
    console.log("Triggering Telegram login flow...");
    // This could potentially redirect to a Telegram auth URL if not in the app.
    // For now, the main auto-login flow in AuthService handles the in-app case.
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      
      // Auto-determine role based on email credential for MVP demo
      const email = this.loginForm.get('email')?.value || '';
      if (email.includes('admin')) {
          this.authService.currentUserRole.set('admin');
      } else {
          this.authService.currentUserRole.set('client');
      }

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
