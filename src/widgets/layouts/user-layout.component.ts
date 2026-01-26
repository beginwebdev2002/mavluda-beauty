
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold/30 selection:text-white">
      <!-- Luxury Dark Header -->
      <header class="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
         <div class="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 md:px-10">
             
             <!-- Logo -->
             <div class="flex items-center space-x-3 group cursor-pointer" routerLink="/user/home">
               <div class="w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
                  <span class="text-[#050505] font-serif font-bold text-lg">MA</span>
               </div>
               <span class="text-white font-bold tracking-[0.15em] text-sm md:text-base group-hover:text-gold transition-colors duration-300">MAVLUDA AZIZOVA</span>
             </div>
             
             <!-- Desktop Nav -->
             <nav class="hidden lg:flex items-center space-x-8">
                <a routerLink="/user/home" routerLinkActive="text-gold" class="text-gray-300 hover:text-gold transition-colors duration-300 text-[11px] font-medium uppercase tracking-[0.15em]">Home</a>
                <a routerLink="/user/services" routerLinkActive="text-gold" class="text-gray-300 hover:text-gold transition-colors duration-300 text-[11px] font-medium uppercase tracking-[0.15em]">Services</a>
                <a routerLink="/user/portfolio" routerLinkActive="text-gold" class="text-gray-300 hover:text-gold transition-colors duration-300 text-[11px] font-medium uppercase tracking-[0.15em]">Portfolio</a>
                <a routerLink="/user/about" routerLinkActive="text-gold" class="text-gray-300 hover:text-gold transition-colors duration-300 text-[11px] font-medium uppercase tracking-[0.15em]">About</a>
                <a routerLink="/user/contact" routerLinkActive="text-gold" class="text-gray-300 hover:text-gold transition-colors duration-300 text-[11px] font-medium uppercase tracking-[0.15em]">Contact</a>
             </nav>

             <!-- CTA Button -->
             <button class="hidden sm:block px-6 py-2.5 bg-gold text-[#050505] text-xs font-bold rounded-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-none transform hover:-translate-y-0.5">
               Book Appointment
             </button>

             <!-- Mobile Menu Button -->
             <button class="lg:hidden text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
             </button>
         </div>
      </header>

      <!-- Main Content -->
      <main class="pt-20">
        <router-outlet></router-outlet>
      </main>

      <!-- Luxury Footer -->
      <footer class="bg-[#020202] border-t border-white/5 pt-20 pb-10 px-6 md:px-10 mt-20">
        <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <!-- Brand Column -->
          <div class="space-y-6">
             <div class="flex items-center space-x-3">
               <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span class="text-[#050505] font-serif font-bold text-xs">MA</span>
               </div>
               <span class="text-white font-bold tracking-[0.15em] text-sm">MAVLUDA AZIZOVA</span>
             </div>
             <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
               Experience the pinnacle of medical aesthetics. Combining artistry with clinical safety to reveal your most radiant self.
             </p>
          </div>

          <!-- Menu Column -->
          <div>
            <h4 class="text-white font-bold text-sm tracking-widest uppercase mb-6">Menu</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Services</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Portfolio</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">About</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Legal Column -->
          <div>
            <h4 class="text-white font-bold text-sm tracking-widest uppercase mb-6">Legal</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gold text-sm transition-colors">Medical Disclaimer</a></li>
            </ul>
          </div>

          <!-- Connect Column -->
          <div>
            <h4 class="text-white font-bold text-sm tracking-widest uppercase mb-6">Connect</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-black flex items-center justify-center transition-all duration-300 text-sm font-medium">IG</a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-black flex items-center justify-center transition-all duration-300 text-sm font-medium">LI</a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-gold hover:text-black flex items-center justify-center transition-all duration-300 text-sm font-medium">FB</a>
            </div>
          </div>
        </div>

        <div class="max-w-[1400px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
           <p>&copy; 2024 Mavluda Azizova. All rights reserved.</p>
           <p class="mt-2 md:mt-0">Designed with Luxury & Care.</p>
        </div>
      </footer>
    </div>
  `
})
export class UserLayoutComponent {}
