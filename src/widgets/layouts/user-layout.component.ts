
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Background Decoration: Ambient Gold Glows -->
    <div class="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 flex min-h-screen w-full flex-col">
        <!-- Navigation -->
        <header class="sticky top-0 z-50 w-full border-b border-[#ffffff10] bg-[#0A0A0A]/80 backdrop-blur-md">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">
                    <!-- Logo -->
                    <a routerLink="/user/home" class="flex items-center gap-3">
                        <!-- Icon -->
                        <div class="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                            <span class="font-serif text-lg text-primary font-medium">M</span>
                        </div>
                        <!-- Text -->
                        <div class="flex flex-col">
                            <h2 class="font-serif text-lg text-white leading-tight">Mavluda Beauty</h2>
                            <p class="text-[8px] text-primary uppercase tracking-[0.15em] font-bold leading-tight">Medical Luxury Ecosystem</p>
                        </div>
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
                        <button class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                            <span class="material-symbols-outlined">notifications</span>
                        </button>
                        <div routerLink="/user/profile" class="h-8 w-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold text-xs cursor-pointer hover:bg-primary/30 transition-colors">
                            SA
                        </div>
                        <button class="md:hidden text-white p-2">
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main class="flex-grow">
            <router-outlet></router-outlet>
        </main>

        <!-- Footer -->
        <footer class="bg-background-dark border-t border-[#222] pt-16 pb-8">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <!-- Brand -->
                    <div class="md:col-span-6 flex flex-col gap-6">
                        <div class="flex items-center gap-4">
                            <!-- Icon -->
                            <div class="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                                <span class="font-serif text-xl text-primary font-medium">M</span>
                            </div>
                            <!-- Text -->
                            <div class="flex flex-col">
                                <h3 class="font-serif text-2xl text-white leading-tight">Mavluda Beauty</h3>
                                <p class="text-[9px] text-primary uppercase tracking-[0.2em] font-bold">Medical Luxury Ecosystem</p>
                            </div>
                        </div>
                        <p class="text-gray-400 leading-relaxed max-w-sm">
                            Experience the pinnacle of medical aesthetics. Combining artistry with clinical safety to reveal your most radiant self.
                        </p>
                    </div>
                    <!-- Links -->
                    <div class="md:col-span-3">
                        <h4 class="text-white font-bold mb-6">Menu</h4>
                        <ul class="flex flex-col gap-4 text-gray-400">
                            <li><a class="hover:text-primary transition-colors" routerLink="/user/services">Services</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Portfolio</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">About</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Contact</a></li>
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
export class UserLayoutComponent {}
