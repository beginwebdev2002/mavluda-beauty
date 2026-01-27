
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-background-dark text-white font-sans min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-gold selection:text-black">
      
      <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/95 backdrop-blur-md px-4 lg:px-10 py-4">
        <div class="max-w-[1440px] mx-auto flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="size-10 flex items-center justify-center border border-gold/30">
              <span class="material-symbols-outlined text-gold text-2xl">spa</span>
            </div>
            <div class="flex flex-col">
              <h2 class="text-white text-xl font-display font-medium leading-none tracking-widest hidden sm:block uppercase">Mavluda Azizova</h2>
              <span class="text-gold text-[9px] uppercase tracking-[0.4em] hidden sm:block font-bold">Medical Luxury Ecosystem</span>
            </div>
          </div>
          <nav class="hidden md:flex items-center gap-10">
            <a routerLink="/user/services" routerLinkActive="text-gold border-gold" class="text-text-muted hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors border-b pb-1 border-transparent">Services</a>
            <a routerLink="/user/portfolio" routerLinkActive="text-gold border-gold" class="text-text-muted hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors border-b pb-1 border-transparent">Portfolio</a>
            <a routerLink="/user/about" routerLinkActive="text-gold border-gold" class="text-text-muted hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors border-b pb-1 border-transparent">About</a>
            <a routerLink="/user/contact" routerLinkActive="text-gold border-gold" class="text-text-muted hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors border-b pb-1 border-transparent">Contact</a>
          </nav>
          <div class="flex items-center gap-6">
            <div class="hidden lg:flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-text-muted">
              <button class="hover:text-gold transition-colors text-gold">EN</button>
              <span class="opacity-20">/</span>
              <button class="hover:text-gold transition-colors">RU</button>
              <span class="opacity-20">/</span>
              <button class="hover:text-gold transition-colors">TG</button>
            </div>
            <button class="md:hidden text-white hover:text-gold">
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div class="flex-1 w-full">
        <router-outlet></router-outlet>
      </div>

      <footer class="border-t border-gold/10 bg-background-dark pt-20 pb-12">
        <div class="max-w-[1440px] mx-auto px-4 lg:px-10">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div class="md:col-span-5">
              <div class="flex items-center gap-4 mb-8">
                <div class="size-12 flex items-center justify-center border border-gold/40">
                  <span class="material-symbols-outlined text-gold text-2xl">spa</span>
                </div>
                <div class="flex flex-col">
                  <h2 class="text-white text-2xl font-display font-medium leading-none tracking-widest uppercase">Mavluda Azizova</h2>
                  <span class="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Medical Luxury Ecosystem</span>
                </div>
              </div>
              <p class="text-text-muted text-sm italic font-light max-w-sm leading-relaxed mb-8">Redefining the standards of aesthetic excellence through a fusion of medical precision and artistic mastery.</p>
            </div>
            <div class="md:col-span-3">
              <h4 class="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-8">Experience</h4>
              <ul class="space-y-4">
                <li><a class="text-text-muted hover:text-white text-xs uppercase tracking-widest transition-colors font-medium" href="#">Our Services</a></li>
                <li><a class="text-text-muted hover:text-white text-xs uppercase tracking-widest transition-colors font-medium" href="#">Portfolio</a></li>
                <li><a class="text-text-muted hover:text-white text-xs uppercase tracking-widest transition-colors font-medium" href="#">The Studio</a></li>
              </ul>
            </div>
            <div class="md:col-span-4">
              <h4 class="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-8">Liaison</h4>
              <div class="flex flex-col gap-6">
                <a class="group flex items-center gap-4" href="#">
                  <span class="text-text-muted group-hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] font-bold">Instagram</span>
                  <div class="flex-1 h-[1px] bg-white/5"></div>
                  <span class="material-symbols-outlined text-gold text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
                </a>
                <a class="group flex items-center gap-4" href="#">
                  <span class="text-text-muted group-hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] font-bold">Concierge</span>
                  <div class="flex-1 h-[1px] bg-white/5"></div>
                  <span class="material-symbols-outlined text-gold text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
                </a>
                <a class="group flex items-center gap-4" href="#">
                  <span class="text-text-muted group-hover:text-gold transition-colors text-xs uppercase tracking-[0.2em] font-bold">Private Membership</span>
                  <div class="flex-1 h-[1px] bg-white/5"></div>
                  <span class="material-symbols-outlined text-gold text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
            <div class="flex items-center gap-3">
              <span class="text-gold/50 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 Institutional Excellence.</span>
              <span class="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span class="text-text-muted text-[10px] uppercase tracking-widest">Global Standards Applied.</span>
            </div>
            <div class="flex items-center gap-8">
              <span class="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">Dushanbe, Tajikistan</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class UserLayoutComponent {}
