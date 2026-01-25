
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
      <header class="bg-white border-b border-gold/10 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
         <div class="h-24 max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-8">
             <div class="flex items-center space-x-4">
               <!-- Logo from Registration Page (Scaled) -->
               <div class="w-10 h-10 bg-gradient-to-br from-gold to-gold-600 rounded-full p-[1px] shadow-gold-lg flex-shrink-0">
                 <div class="w-full h-full bg-[#121212] rounded-full flex items-center justify-center border border-gold/20">
                    <span class="text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">M</span>
                 </div>
               </div>
               
               <div>
                 <h1 class="text-xl font-serif text-gray-900 tracking-tight">Mavluda Beauty</h1>
               </div>
             </div>
             
             <nav class="hidden md:flex items-center space-x-8">
                <a routerLink="/user/home" routerLinkActive="text-gray-900 font-semibold" class="text-gray-500 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-[0.15em] font-medium">Home</a>
                <a routerLink="/user/services" routerLinkActive="text-gray-900 font-semibold" class="text-gray-500 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-[0.15em] font-medium">Treatments</a>
                <a routerLink="/user/profile" routerLinkActive="text-gray-900 font-semibold" class="text-gray-500 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-[0.15em] font-medium">My Profile</a>
             </nav>

             <button class="px-6 py-2.5 bg-[#0A0A0A] text-white text-xs font-medium rounded-full hover:bg-gold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md uppercase tracking-wider">
               Book Now
             </button>
         </div>
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
