
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="animate-page-enter">
      <!-- Hero Section -->
      <section class="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
        <div class="absolute inset-0 opacity-40">
            <!-- Abstract Luxury Background Pattern simulation -->
            <div class="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark z-10"></div>
            <img src="https://picsum.photos/1920/1080?grayscale" class="w-full h-full object-cover" alt="Luxury Spa">
        </div>
        
        <div class="relative z-20 text-center max-w-3xl px-6">
          <h1 class="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Reveal Your <span class="text-gold italic">Inner Radiance</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 font-light">
            Experience the pinnacle of medical aesthetics. Where science meets artistry to craft your perfect look.
          </p>
          <button class="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-gold/40 transform hover:-translate-y-1">
            Book Appointment
          </button>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-24 px-8 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-serif text-gray-900 mb-4">Why Choose Mavluda Beauty</h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="text-center">
                <div class="w-16 h-16 bg-gold-50 text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    ★
                </div>
                <h3 class="text-xl font-serif text-gray-900 mb-3">Premium Service</h3>
                <p class="text-gray-500 leading-relaxed">Only the finest products and FDA-approved treatments for our distinguished clientele.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-gold-50 text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    ⚕️
                </div>
                <h3 class="text-xl font-serif text-gray-900 mb-3">Medical Expertise</h3>
                <p class="text-gray-500 leading-relaxed">Certified professionals with years of experience in medical aesthetics.</p>
            </div>
            <div class="text-center">
                <div class="w-16 h-16 bg-gold-50 text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    💎
                </div>
                <h3 class="text-xl font-serif text-gray-900 mb-3">Luxury Experience</h3>
                <p class="text-gray-500 leading-relaxed">From the moment you walk in, immerse yourself in an atmosphere of tranquility and opulence.</p>
            </div>
        </div>
      </section>
    </div>
  `
})
export class UserHomeComponent {}
