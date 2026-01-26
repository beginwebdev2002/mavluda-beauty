
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="animate-page-enter">
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden pt-10 pb-20 px-6 md:px-10">
        
        <!-- Background Glows -->
        <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div class="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <!-- Text Content -->
          <div class="space-y-8 lg:pr-12 order-2 lg:order-1">
             <!-- Tag -->
             <div class="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[10px] font-bold tracking-[0.2em] uppercase bg-gold/5 backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-gold mr-2 animate-pulse"></span>
                Medical Aesthetics
             </div>

             <!-- Headline -->
             <h1 class="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
               Redefining <br/>
               <span class="text-gold italic">Aesthetic</span> <br/>
               Excellence
             </h1>

             <!-- Description -->
             <div class="flex items-start border-l border-gold/30 pl-6">
               <p class="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                 Mavluda Azizova — Elite Visagiste & Medical Aesthetics Specialist. Where advanced Medical Science meets artistic precision for natural, transformative results.
               </p>
             </div>

             <!-- CTA Buttons -->
             <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a routerLink="/auth" class="w-full sm:w-auto px-8 py-4 bg-gold text-[#050505] text-sm font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-2 group">
                   Secure Consultation
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a routerLink="/user/portfolio" class="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center">
                   View Portfolio
                </a>
             </div>

             <!-- Social Proof -->
             <div class="flex items-center gap-4 pt-4">
                <div class="flex -space-x-3">
                   <img src="https://picsum.photos/seed/client1/100/100" class="w-10 h-10 rounded-full border-2 border-[#050505]" alt="Client">
                   <img src="https://picsum.photos/seed/client2/100/100" class="w-10 h-10 rounded-full border-2 border-[#050505]" alt="Client">
                   <img src="https://picsum.photos/seed/client3/100/100" class="w-10 h-10 rounded-full border-2 border-[#050505]" alt="Client">
                </div>
                <div>
                   <p class="text-white text-sm font-medium"><span class="text-gold">500+</span> Satisfied Clients</p>
                </div>
             </div>
          </div>

          <!-- Hero Image -->
          <div class="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full">
             <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 lg:hidden"></div>
             
             <!-- Main Image Container -->
             <div class="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
                <img ngSrc="https://picsum.photos/seed/makeup_gold/800/1200" width="800" height="1200" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Mavluda Aesthetics">
                
                <!-- Status Card Overlay -->
                <div class="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4 z-20">
                   <div class="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-[#050505]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <div>
                      <p class="text-gold text-[10px] font-bold tracking-widest uppercase">Clinic Status</p>
                      <p class="text-white font-medium text-sm">Accepting New Patients</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      <!-- Trusted Partners Section -->
      <section class="border-y border-white/5 bg-[#080808] py-16">
         <div class="max-w-[1400px] mx-auto px-6 text-center">
            <p class="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-10">Trusted Partners & Medical Boards</p>
            
            <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
               <!-- Partner Logos (Text placeholders for MVP styled as logos) -->
               <div class="flex items-center gap-2 group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 group-hover:text-gold"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                  <span class="text-xl font-serif font-bold text-gray-300 group-hover:text-white">VOGUE</span>
               </div>

               <div class="flex items-center gap-2 group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 group-hover:text-gold"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <span class="text-xl font-serif font-bold text-gray-300 group-hover:text-white">ELITE</span>
               </div>

               <div class="flex items-center gap-2 group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 group-hover:text-gold"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
                  <span class="text-xl font-serif font-bold text-gray-300 group-hover:text-white">MED_ASSOC</span>
               </div>

               <div class="flex items-center gap-2 group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 group-hover:text-gold"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/></svg>
                  <span class="text-xl font-serif font-bold text-gray-300 group-hover:text-white">PURE</span>
               </div>

               <div class="flex items-center gap-2 group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-gray-400 group-hover:text-gold"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span class="text-xl font-serif font-bold text-gray-300 group-hover:text-white">AESTHETICA</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  `
})
export class UserHomeComponent {}
