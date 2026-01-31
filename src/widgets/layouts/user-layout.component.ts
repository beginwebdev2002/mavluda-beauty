
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Background Decoration: Ambient Gold Glows -->
    <div class="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-20%] right-[-15%] w-[800px] h-[800px] bg-primary rounded-full animate-ambient-glow"></div>
        <div class="absolute bottom-[-20%] left-[-25%] w-[700px] h-[700px] bg-primary rounded-full animate-ambient-glow [animation-delay:4s]"></div>
    </div>

    <div class="relative z-10 flex min-h-screen w-full flex-col">
        <!-- Navigation -->
        <header class="sticky top-0 z-50 w-full border-b border-[#ffffff10] bg-[#0A0A0A]/80 backdrop-blur-md">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                    <!-- Logo -->
                    <a routerLink="/user/home" class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full border border-gold/70 flex items-center justify-center">
                           <span class="font-serif text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#b8952a]">M</span>
                        </div>
                        <h2 class="font-serif text-lg font-medium text-white tracking-wide">Mavluda Beauty</h2>
                    </a>
                    <!-- Desktop Nav -->
                    <nav class="hidden md:flex items-center gap-8">
                        <a routerLink="/user/home" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" class="text-gray-300 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Home</a>
                        <a routerLink="/user/services" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Services</a>
                        <a routerLink="/user/portfolio" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Portfolio</a>
                        <a routerLink="/user/about" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">About</a>
                        <a routerLink="/user/about" fragment="contact" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Contact</a>
                    </nav>
                    <!-- CTA & Mobile Menu -->
                    <div class="flex items-center gap-4">
                        <button routerLink="/user/about" fragment="contact" class="hidden sm:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary-hover text-[#0A0A0A] text-sm font-bold uppercase tracking-wider rounded transition-all shadow-gold btn-primary-shimmer active:scale-[0.98]">
                            Book Appointment
                        </button>
                        <button (click)="toggleMobileMenu()" class="md:hidden text-white p-2 z-50">
                             <span class="material-symbols-outlined transition-transform duration-300" [class.rotate-90]="isMobileMenuOpen()">
                                {{ isMobileMenuOpen() ? 'close' : 'menu' }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

         <!-- Mobile Menu Overlay -->
        @if (isMobileMenuOpen()) {
            <div class="fixed inset-0 top-0 z-40 bg-background-dark/95 backdrop-blur-lg md:hidden" (click)="toggleMobileMenu()">
                <div class="mt-20 flex flex-col items-center justify-center h-full animate-in fade-in slide-in-from-top-4 duration-500">
                    <nav class="flex flex-col items-center gap-8 text-center" (click)="$event.stopPropagation()">
                        <a (click)="toggleMobileMenu()" routerLink="/user/home" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" class="text-gray-300 hover:text-primary transition-colors text-2xl font-medium uppercase tracking-widest">Home</a>
                        <a (click)="toggleMobileMenu()" routerLink="/user/services" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-2xl font-medium uppercase tracking-widest">Services</a>
                        <a (click)="toggleMobileMenu()" routerLink="/user/portfolio" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-2xl font-medium uppercase tracking-widest">Portfolio</a>
                        <a (click)="toggleMobileMenu()" routerLink="/user/about" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-2xl font-medium uppercase tracking-widest">About</a>
                        <a (click)="toggleMobileMenu()" routerLink="/user/about" fragment="contact" routerLinkActive="text-primary" class="text-gray-300 hover:text-primary transition-colors text-2xl font-medium uppercase tracking-widest">Contact</a>
                        <button (click)="toggleMobileMenu()" routerLink="/user/about" fragment="contact" class="mt-8 items-center justify-center h-12 px-8 bg-primary hover:bg-primary-hover text-[#0A0A0A] text-base font-bold uppercase tracking-wider rounded transition-all shadow-gold btn-primary-shimmer active:scale-[0.98]">
                            Book Appointment
                        </button>
                    </nav>
                </div>
            </div>
        }

        <main class="flex-grow">
            <router-outlet></router-outlet>
        </main>

        <!-- Footer -->
        <footer class="bg-background-dark border-t border-[#222] pt-16 pb-8">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <!-- Brand -->
                    <div class="md:col-span-6 flex flex-col gap-6">
                        <div class="flex items-center gap-3">
                           <div class="w-9 h-9 rounded-full border border-gold/70 flex items-center justify-center">
                                <span class="font-serif text-xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#b8952a]">M</span>
                           </div>
                           <h3 class="font-serif text-lg font-medium text-white tracking-wide">Mavluda Beauty</h3>
                        </div>
                        <p class="text-gray-400 leading-relaxed max-w-sm">
                            Experience the pinnacle of medical aesthetics. Combining artistry with clinical safety to reveal your most radiant self.
                        </p>
                    </div>
                    <!-- Links -->
                    <div class="md:col-span-3">
                        <h4 class="text-white font-bold mb-6">Menu</h4>
                        <ul class="flex flex-col gap-4 text-gray-400">
                            <li><a routerLink="/user/services" class="hover:text-primary transition-colors">Services</a></li>
                            <li><a routerLink="/user/portfolio" class="hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a routerLink="/user/about" class="hover:text-primary transition-colors">About</a></li>
                            <li><a routerLink="/user/about" fragment="contact" class="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <!-- Legal -->
                    <div class="md:col-span-3">
                        <h4 class="text-white font-bold mb-6">Legal</h4>
                        <ul class="flex flex-col gap-4 text-gray-400">
                            <li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Medical Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 Mavluda Azizova. All rights reserved.</p>
                    <p>Designed with Luxury & Care.</p>
                </div>
            </div>
        </footer>
    </div>
  `
})
export class UserLayoutComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
