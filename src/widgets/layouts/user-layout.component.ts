
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-white">
      <!-- Minimal Luxury Header -->
      <header class="h-24 bg-white border-b border-gold/10 flex items-center justify-between px-8 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
         <div class="flex items-center space-x-3">
           <div class="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">M</div>
           <div>
             <h1 class="text-2xl font-serif text-gray-900 tracking-tight">Mavluda Beauty</h1>
             <p class="text-[10px] uppercase tracking-widest text-gold-dark font-medium">Medical Luxury</p>
           </div>
         </div>
         
         <nav class="hidden md:flex items-center space-x-8">
            <a routerLink="/user/home" routerLinkActive="text-gold-dark font-medium" class="text-gray-500 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide">Home</a>
            <a routerLink="/user/services" routerLinkActive="text-gold-dark font-medium" class="text-gray-500 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide">Treatments</a>
            <a routerLink="/user/profile" routerLinkActive="text-gold-dark font-medium" class="text-gray-500 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wide">My Profile</a>
         </nav>

         <button class="px-6 py-2.5 bg-dark text-white text-sm font-medium rounded-full hover:bg-gold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-0.5">
           Book Now
         </button>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="bg-gray-50 border-t border-gray-100 py-12 px-8">
        <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Mavluda Beauty. All rights reserved.</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-gold">Instagram</a>
            <a href="#" class="hover:text-gold">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class UserLayoutComponent {}
