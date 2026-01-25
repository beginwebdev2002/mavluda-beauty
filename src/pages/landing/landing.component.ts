
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageService, WeddingImage } from '../../shared/services/image.service';
import { LanguageSwitcherComponent } from '../../features/language-selection/language-switcher.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- 
      This <style> block is equivalent to landing.component.scss
      It contains the custom Ken Burns animation for the hero image.
    -->
    <style>
      .kenburns {
        animation: kenburns-effect 50s ease-out infinite alternate;
        will-change: transform;
      }
      @keyframes kenburns-effect {
        0% { transform: scale(1.0) translate(0, 0); }
        100% { transform: scale(1.15) translate(-2%, 2%); }
      }
      .scroll-bounce {
        animation: bounce 2s infinite;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(-10px);}
        60% {transform: translateY(-5px);}
      }
      /* Custom Shimmer for Skeleton */
      .animate-shimmer-gold {
        animation: shimmer 2.5s infinite linear;
      }
    </style>

    <div class="bg-[#FDFBF8] text-dark-surface font-sans antialiased selection:bg-gold/30 selection:text-dark">
      
      <!-- Header -->
      <header class="absolute top-0 left-0 right-0 z-30 py-6 px-4 md:px-8 transition-all duration-300">
        <div class="flex justify-between items-center max-w-screen-2xl mx-auto">
          
          <!-- Logo Area -->
          <div class="text-white flex flex-col group cursor-default">
            <h1 class="font-serif text-2xl tracking-wider group-hover:text-gold transition-colors duration-300">Aliya Wedding Room</h1>
            <p class="text-[10px] uppercase tracking-[0.3em] text-white/70 group-hover:text-gold/80 transition-colors">by Mavluda Beauty</p>
          </div>

          <!-- Right Actions -->
          <div class="flex items-center space-x-2 md:space-x-6">
            <div class="hidden md:block">
              <app-language-switcher variant="dark"></app-language-switcher>
            </div>
            
            <a routerLink="/auth" class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-dark hover:border-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-gold/20">
              Book a Consultation
            </a>
          </div>
        </div>
      </header>

      <!-- Dynamic Hero Section -->
      <section class="relative h-screen bg-[#050505] overflow-hidden">
        
        <!-- Loading State: Luxury Skeleton -->
        @if (isLoading()) {
          <div class="absolute inset-0 z-50 grid grid-cols-4 grid-rows-3 gap-1 md:gap-2 p-0 bg-[#050505]">
            <!-- Main Hero Skeleton -->
            <div class="col-span-4 md:col-span-3 row-span-3 relative overflow-hidden bg-gray-900">
              <div class="absolute inset-0 -translate-x-full animate-shimmer-gold bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
            </div>
            <!-- Side Skeletons -->
            <div class="hidden md:block relative overflow-hidden bg-gray-900">
               <div class="absolute inset-0 -translate-x-full animate-shimmer-gold bg-gradient-to-r from-transparent via-gold/10 to-transparent [animation-delay:150ms]"></div>
            </div>
            <div class="hidden md:block relative overflow-hidden bg-gray-900">
               <div class="absolute inset-0 -translate-x-full animate-shimmer-gold bg-gradient-to-r from-transparent via-gold/10 to-transparent [animation-delay:300ms]"></div>
            </div>
            <div class="hidden md:block relative overflow-hidden bg-gray-900">
               <div class="absolute inset-0 -translate-x-full animate-shimmer-gold bg-gradient-to-r from-transparent via-gold/10 to-transparent [animation-delay:450ms]"></div>
            </div>
            
            <!-- Elegant Loading Text -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div class="text-center">
                  <p class="text-gold text-xs uppercase tracking-[0.5em] animate-pulse font-medium">Curating Elegance</p>
               </div>
            </div>
          </div>
        } @else {
          <!-- Active Content: Image Grid Background -->
          <div class="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 md:gap-2 opacity-0 animate-page-enter duration-1000">
             <!-- Main Image (Ken Burns) -->
            @if (heroImage(); as hero) {
              <div class="col-span-4 md:col-span-3 row-span-3 overflow-hidden relative">
                <div class="absolute inset-0 bg-black/10 z-10"></div>
                <img [ngSrc]="hero.url" [alt]="hero.alt" width="1800" height="1200" priority class="w-full h-full object-cover kenburns">
              </div>
            }
            <!-- Secondary Images (Hidden on mobile for cleaner look) -->
            @for (img of secondaryImages(); track img.url) {
              <div class="hidden md:block overflow-hidden relative group">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img [ngSrc]="img.url" [alt]="img.alt" width="800" height="1200" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              </div>
            }
          </div>
        }
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none"></div>
        
        <!-- Hero Text Content -->
        <div class="relative z-20 flex flex-col justify-center h-full text-white max-w-screen-2xl mx-auto px-4 md:px-8 pointer-events-none">
          <div class="max-w-2xl mt-10 md:mt-0 pointer-events-auto">
            <div class="overflow-hidden mb-2">
               <p class="text-gold uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium animate-slide-up text-sm md:text-base">A Symphony of Silk & Love</p>
            </div>
            <h2 class="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 animate-slide-up [animation-delay:200ms]">
              Where Love <br/> Becomes <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F4ECD3]">Legacy</span>
            </h2>
            <p class="text-lg md:text-xl text-white/90 max-w-prose leading-relaxed animate-slide-up [animation-delay:400ms] font-light">
              At <span class="font-serif italic text-gold">Aliya Wedding Room</span>, we believe a wedding gown is more than a dress — it is the first heirloom of your new life. Discover couture that speaks the language of your heart.
            </p>
            
            <div class="mt-10 animate-slide-up [animation-delay:600ms]">
               <button class="group flex items-center space-x-4 text-white hover:text-gold transition-colors duration-300">
                  <span class="text-sm uppercase tracking-widest border-b border-gold/50 pb-1 group-hover:border-gold">Explore Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-2 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
               </button>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 animate-page-enter [animation-delay:1000ms]">
          <div class="flex flex-col items-center space-y-2 scroll-bounce">
            <span class="text-[10px] uppercase tracking-widest">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>
      </section>
      
      <!-- Philosophy Section -->
      <section class="py-24 sm:py-32 px-4 md:px-8 bg-[#FDFBF8]">
        <div class="max-w-4xl mx-auto text-center">
          <p class="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-medium mb-6">Our Commitment</p>
          <h2 class="text-3xl md:text-5xl font-serif text-dark mb-8 leading-snug">A Love Story, <span class="italic text-gray-500">Uniquely Yours</span></h2>
          <div class="w-px h-16 bg-gradient-to-b from-gold/80 to-transparent mx-auto mb-8"></div>
          <p class="text-lg md:text-xl text-gray-700/80 leading-relaxed font-light">
            We believe that every bride deserves a dress that is as unique and unforgettable as her own love story. Our philosophy is rooted in a deep appreciation for craftsmanship, timeless elegance, and a truly personal experience. From the initial sketch to the final fitting, we are dedicated to bringing your vision to life with unparalleled artistry and care.
          </p>
        </div>
      </section>

      <!-- Gallery Preview Section -->
      <section class="bg-white py-24 sm:py-32 border-t border-gray-100">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
          <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 class="text-4xl md:text-5xl font-serif text-dark mb-4">The Collection</h2>
              <p class="text-lg text-gray-500 font-light">An exclusive glimpse into our curated couture gowns.</p>
            </div>
            <a routerLink="/user/home" class="hidden md:inline-flex items-center text-gold hover:text-dark transition-colors duration-300">
               <span class="mr-2 text-sm font-medium uppercase tracking-widest">View Full Gallery</span>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            @for(image of galleryImages(); track image.url) {
              <div class="group relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer">
                <img [ngSrc]="image.url" [alt]="image.alt" width="600" height="800" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <svg class="text-white w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                   </div>
                </div>
                <div class="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <p class="font-serif text-xl">Couture Edition</p>
                </div>
              </div>
            }
          </div>
          
          <div class="mt-12 text-center md:hidden">
            <a routerLink="/user/home" class="inline-block border-b border-gold text-gold pb-1 text-sm uppercase tracking-widest">View Full Gallery</a>
          </div>
        </div>
      </section>

      <!-- The Experience Section -->
      <section class="py-24 sm:py-32 px-4 md:px-8 bg-[#FDFBF8]">
        <div class="max-w-screen-lg mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-serif text-dark mb-4">The Bespoke Experience</h2>
            <p class="text-lg text-gray-500 font-light">A journey tailored to perfection, just for you.</p>
          </div>
          
          <div class="relative">
            <!-- Connecting Line (Desktop) -->
            <div class="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              <!-- Step 1 -->
              <div class="flex flex-col items-center group">
                <div class="w-20 h-20 mb-8 flex items-center justify-center rounded-full bg-[#FDFBF8] border border-gold/30 shadow-gold-sm group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                  <span class="font-serif text-2xl text-gold">01</span>
                </div>
                <h3 class="text-xl font-serif text-dark mb-3">Private Consultation</h3>
                <p class="text-gray-600 leading-relaxed font-light text-sm px-4">Your journey begins with a champagne consultation to explore your vision, style, and desires.</p>
              </div>
              <!-- Step 2 -->
              <div class="flex flex-col items-center group">
                <div class="w-20 h-20 mb-8 flex items-center justify-center rounded-full bg-[#FDFBF8] border border-gold/30 shadow-gold-sm group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                  <span class="font-serif text-2xl text-gold">02</span>
                </div>
                <h3 class="text-xl font-serif text-dark mb-3">Couture Fitting</h3>
                <p class="text-gray-600 leading-relaxed font-light text-sm px-4">Experience your chosen gown as our master seamstresses meticulously sculpt it to your exact measurements.</p>
              </div>
              <!-- Step 3 -->
              <div class="flex flex-col items-center group">
                <div class="w-20 h-20 mb-8 flex items-center justify-center rounded-full bg-[#FDFBF8] border border-gold/30 shadow-gold-sm group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                  <span class="font-serif text-2xl text-gold">03</span>
                </div>
                <h3 class="text-xl font-serif text-dark mb-3">The Final Reveal</h3>
                <p class="text-gray-600 leading-relaxed font-light text-sm px-4">Your perfected gown is presented for your final approval, ensuring every detail is immaculate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="relative bg-dark text-white py-32 overflow-hidden">
        <div class="absolute inset-0 opacity-30">
          <img ngSrc="https://picsum.photos/seed/fabric-cta/1920/1080" width="1920" height="1080" class="w-full h-full object-cover grayscale" alt="Luxury fabric background">
        </div>
        <!-- Gold Glow Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent mix-blend-overlay"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto text-center px-8">
          <h2 class="text-5xl md:text-6xl font-serif mb-8">Begin Your Forever</h2>
          <p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Your dream dress awaits. Schedule a private consultation with our bridal stylists and discover the gown that will define your moment.
          </p>
          <a routerLink="/auth" class="inline-block bg-gradient-to-r from-gold to-[#B89628] hover:to-gold text-white font-medium py-5 px-12 rounded-full text-lg transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 hover:scale-105">
            Book Your Appointment
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-[#050505] text-white py-20 border-t border-white/5">
        <div class="max-w-screen-xl mx-auto px-8">
          <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            
            <div class="text-center md:text-left">
              <h3 class="font-serif text-3xl mb-2 tracking-wide">Aliya Wedding Room</h3>
              <p class="text-xs uppercase tracking-[0.3em] text-gold/60 mb-6">by Mavluda Beauty</p>
              <div class="flex justify-center md:justify-start space-x-6 text-gray-400">
                <a href="https://instagram.com/aliya_wedding_room" target="_blank" class="hover:text-gold transition-colors text-sm uppercase tracking-wider">@aliya_wedding_room</a>
              </div>
            </div>

            <div class="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left text-sm text-gray-400">
               <div>
                  <h4 class="text-white font-serif mb-4 text-lg">Visit Us</h4>
                  <p>Rudaki Avenue, 127</p>
                  <p>Dushanbe, Tajikistan</p>
               </div>
               <div>
                  <h4 class="text-white font-serif mb-4 text-lg">Contact</h4>
                  <p>+992 900 00 00 00</p>
                  <p>wedding@mavluda.beauty</p>
               </div>
            </div>

          </div>
          
          <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
             <p>&copy; {{ currentYear }} Mavluda Beauty. All Rights Reserved.</p>
             <p class="italic font-serif text-gray-700">Crafted with love for the modern bride.</p>
          </div>
        </div>
      </footer>

    </div>
  `
})
export class LandingComponent implements OnInit {
  private imageService = inject(ImageService);
  
  isLoading = signal(true);
  heroImage = signal<WeddingImage | null>(null);
  secondaryImages = signal<WeddingImage[]>([]);
  galleryImages = signal<WeddingImage[]>([]);

  readonly currentYear = new Date().getFullYear();

  ngOnInit() {
    this.loadImages();
  }

  async loadImages() {
    this.isLoading.set(true);
    
    // 1. Fetch images immediately
    const images = await this.imageService.getWeddingImages();

    // 2. Select images immediately to determine which URLs to preload
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    const hero = shuffled[0];
    const secondary = shuffled.slice(1, 4);
    const gallery = shuffled.slice(4, 8);
    const imagesToPreload = [hero, ...secondary].filter(Boolean);

    // 3. Parallel Execution: 
    //    Wait for BOTH the minimum luxury delay (2s) AND the image preloading.
    //    This ensures that when the spinner vanishes, the hero image is ready in the browser cache.
    try {
      await Promise.all([
        new Promise(resolve => setTimeout(resolve, 2000)), // Minimum luxury delay
        this.preloadImages(imagesToPreload)
      ]);
    } catch (err) {
      console.warn('Preloading non-critical error:', err);
      // Continue even if preloading fails (e.g. one image 404s)
    }

    // 4. Update state to reveal content
    this.heroImage.set(hero);
    this.secondaryImages.set(secondary);
    this.galleryImages.set(gallery);
    this.isLoading.set(false);
  }

  // Preloads images by creating Image objects in memory
  private preloadImages(images: WeddingImage[]): Promise<void[]> {
    const promises = images.map(img => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve(); // Resolve on error too to avoid blocking the UI
        image.src = img.url; 
      });
    });
    return Promise.all(promises);
  }
}
