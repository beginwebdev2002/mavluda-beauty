
import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (authService.isGlobalLoading()) {
      <!-- Luxury Loading Screen (Zoneless compliant) -->
      <div class="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden">
        
        <!-- Background Ambient Glow -->
        <div class="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>

        <!-- Gold Shimmer Logo -->
        <div class="w-24 h-24 mb-10 relative overflow-hidden rounded-full bg-gradient-to-br from-gold to-[#887023] p-[2px] shadow-gold-lg z-10">
             <div class="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
                <span class="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#F4ECD3] font-bold">M</span>
             </div>
             <!-- Shimmer overlay -->
             <div class="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        <!-- Progress Indicator -->
        <div class="w-48 h-1 bg-gray-800 rounded-full overflow-hidden z-10 relative">
           <div class="absolute inset-0 bg-gold animate-progress shadow-[0_0_10px_#D4AF37]"></div>
        </div>

        <div class="mt-6 text-center z-10">
           <p class="text-gold-100 font-serif text-lg tracking-wide">Mavluda Beauty</p>
           <p class="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-medium">Authenticating Securely</p>
        </div>
      </div>
    } @else {
      <router-outlet></router-outlet>
    }
  `
})
export class AppComponent implements OnInit {
  public authService = inject(AuthService);

  ngOnInit() {
    // Trigger authentication check on app launch
    this.authService.checkTelegramAuth();
  }
}