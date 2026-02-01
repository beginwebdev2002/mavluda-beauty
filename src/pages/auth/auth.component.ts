
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
