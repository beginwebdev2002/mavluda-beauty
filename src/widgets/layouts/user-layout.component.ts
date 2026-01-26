
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#d4af35] selection:text-[#0A0A0A] overflow-x-hidden">
      
      <!-- Background Decoration: Ambient Gold Glows (Global) -->
      <div class="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#d4af35]/5 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#d4af35]/5 rounded-full blur-[100px]"></div>
      </div>

      <!-- Navigation -->
      <header class="sticky top-0 z-50 w-full border-b border-[#ffffff10] bg-[#0A0A0A]/80 backdrop-blur-md transition-all duration-300">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            
            <!-- Logo -->
            <div class="flex items-center gap-3 cursor-pointer" routerLink="/user/home">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af35] to-[#8a701e] text-[#0A0A0A] shadow-[0_0_15px_rgba(212,175,53,0.3)]">
                <span class="font-serif font-bold text-xl tracking-tighter">MA</span>
              </div>
              <h2 class="text-white text-lg font-bold uppercase tracking-[0.1em] font-serif">Mavluda Azizova</h2>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8">
              <a routerLink="/user/home" routerLinkActive="text-[#d4af35]" class="text-gray-300 hover:text-[#d4af35] transition-colors text-sm font-medium uppercase tracking-wide">Home</a>
              <a routerLink="/user/services" routerLinkActive="text-[#d4af35]" class="text-gray-300 hover:text-[#d4af35] transition-colors text-sm font-medium uppercase tracking-wide">Services</a>
              <a routerLink="/user/portfolio" routerLinkActive="text-[#d4af35]" class="text-gray-300 hover:text-[#d4af35] transition-colors text-sm font-medium uppercase tracking-wide">Portfolio</a>
              <a routerLink="/user/about" routerLinkActive="text-[#d4af35]" class="text-gray-300 hover:text-[#d4af35] transition-colors text-sm font-medium uppercase tracking-wide">About</a>
              <a routerLink="/user/contact" routerLinkActive="text-[#d4af35]" class="text-gray-300 hover:text-[#d4af35] transition-colors text-sm font-medium uppercase tracking-wide">Contact</a>
            </nav>

            <!-- CTA & Mobile Menu -->
            <div class="flex items-center gap-4">
              <button class="hidden sm:flex items-center justify-center h-10 px-6 bg-[#d4af35] hover:bg-[#b8952a] text-[#0A0A0A] text-sm font-bold uppercase tracking-wider rounded transition-all shadow-[0_4px_14px_0_rgba(212,175,53,0.25)] hover:shadow-[0_6px_20px_rgba(212,175,53,0.4)] transform hover:-translate-y-0.5">
                 Book Appointment
              </button>
              <button class="md:hidden text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="relative z-10 min-h-[calc(100vh-80px)] flex flex-col">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-[#0A0A0A] border-t border-[#222] pt-16 pb-8 relative z-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <!-- Brand -->
            <div class="md:col-span-5 flex flex-col gap-6">
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af35] text-[#0A0A0A]">
                  <span class="font-serif font-bold text-sm">MA</span>
                </div>
                <h3 class="text-white text-lg font-bold uppercase tracking-wider font-serif">Mavluda Azizova</h3>
              </div>
              <p class="text-gray-400 leading-relaxed max-w-sm">
                 Experience the pinnacle of medical aesthetics. Combining artistry with clinical safety to reveal your most radiant self.
              </p>
            </div>
            <!-- Links -->
            <div class="md:col-span-2">
              <h4 class="text-white font-bold mb-6 font-serif">Menu</h4>
              <ul class="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Services</a></li>
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Portfolio</a></li>
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">About</a></li>
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <!-- Legal -->
            <div class="md:col-span-2">
              <h4 class="text-white font-bold mb-6 font-serif">Legal</h4>
              <ul class="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Privacy Policy</a></li>
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Terms of Service</a></li>
                <li><a class="hover:text-[#d4af35] transition-colors" href="#">Medical Disclaimer</a></li>
              </ul>
            </div>
            <!-- Contact/Social -->
            <div class="md:col-span-3">
              <h4 class="text-white font-bold mb-6 font-serif">Connect</h4>
              <div class="flex gap-4 mb-6">
                <a class="h-10 w-10 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:bg-[#d4af35] hover:text-[#0A0A0A] transition-all" href="#">
                  <span class="font-bold text-xs">IG</span>
                </a>
                <a class="h-10 w-10 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:bg-[#d4af35] hover:text-[#0A0A0A] transition-all" href="#">
                  <span class="font-bold text-xs">LI</span>
                </a>
                <a class="h-10 w-10 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:bg-[#d4af35] hover:text-[#0A0A0A] transition-all" href="#">
                   <span class="font-bold text-xs">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div class="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2024 Mavluda Azizova. All rights reserved.</p>
            <p>Designed with Luxury & Care.</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class UserLayoutComponent {}
