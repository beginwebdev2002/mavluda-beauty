
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-services-catalog',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="flex-grow animate-page-enter">
      <!-- Header Section -->
      <section class="relative w-full py-12 lg:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/5 w-fit">
              <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              <span class="text-primary text-xs font-bold uppercase tracking-widest">Available for Booking</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Refined <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#edd685] to-primary">Services</span>
            </h1>
            <p class="text-gray-400 text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
              A curated selection of medical aesthetic treatments and professional visage services designed to enhance your natural beauty through precision and artistry.
            </p>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="w-full pb-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            <!-- Sidebar -->
            <aside class="w-full lg:w-64 flex-shrink-0">
              <div class="sticky top-24">
                <div class="flex items-center justify-between mb-6 pb-2 border-b border-[#ffffff10]">
                  <h3 class="text-lg font-bold uppercase tracking-wider text-white">Refine</h3>
                  <span class="material-symbols-outlined text-primary text-sm">filter_list</span>
                </div>
                <ul class="space-y-1">
                  @for(filter of filterOptions; track filter) {
                    <li>
                      <button 
                        (click)="setFilter(filter)"
                        class="w-full text-left px-4 py-3 border-l-2 transition-all text-sm uppercase tracking-wide"
                        [class]="activeFilter() === filter
                          ? 'border-primary text-primary font-bold bg-primary/5'
                          : 'border-transparent text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5'"
                      >
                        {{ filter }}
                      </button>
                    </li>
                  }
                </ul>
                <div class="mt-12 p-6 rounded-2xl bg-[#121212] border border-[#ffffff10]">
                  <h4 class="text-primary font-bold mb-2">Need Guidance?</h4>
                  <p class="text-xs text-gray-400 mb-4 leading-relaxed">Schedule a preliminary consultation to discuss your specific needs and expected results.</p>
                  <a class="text-xs font-bold text-white border-b border-primary pb-0.5 hover:text-primary transition-colors" href="#">Contact Support</a>
                </div>
              </div>
            </aside>

            <!-- Services Grid -->
            <div class="flex-grow">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                @for(service of filteredServices(); track service.id; let i = $index) {
                  <article class="group relative flex flex-col h-full reveal-item" [style.animation-delay.ms]="i * 100">
                    <div class="relative aspect-[4/5] w-full overflow-hidden rounded-3xl mb-6 shadow-2xl shadow-black/50">
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300 opacity-60 group-hover:opacity-40"></div>
                      <img [ngSrc]="service.imageUrl" [alt]="service.name" width="800" height="1000" priority
                           class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.9] group-hover:saturate-100"/>
                      <div class="absolute bottom-6 right-6 z-20">
                        <div class="bg-black/80 backdrop-blur-md border border-primary/40 pl-4 pr-5 py-2 rounded-full flex items-center gap-3">
                          <span class="text-[10px] text-gray-300 uppercase tracking-wider font-medium">Honorarium</span>
                          <span class="text-primary font-bold text-sm tracking-tight">{{ service.price | number }} TJS</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col flex-grow">
                      <span class="text-xs font-bold text-primary uppercase tracking-widest mb-2">{{ service.category }}</span>
                      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{{ service.name }}</h3>
                      <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">{{ service.description }}</p>
                      <div class="mt-auto">
                        <button class="w-full h-12 rounded-xl bg-primary hover:bg-primary-hover text-[#0A0A0A] text-sm font-bold uppercase tracking-wider shadow-gold hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 btn-primary-shimmer active:scale-[0.98]">
                          <span>Secure Consultation</span>
                          <span class="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </article>
                }
                 @if (filteredServices().length === 0) {
                    <div class="md:col-span-2 text-center py-20 border border-dashed border-white/10 rounded-2xl">
                        <span class="material-symbols-outlined text-gold/30 text-5xl">sentiment_dissatisfied</span>
                        <h3 class="mt-4 font-display text-2xl text-white">No Services Found</h3>
                        <p class="mt-2 text-text-muted italic">Please adjust your filter criteria.</p>
                    </div>
                  }
              </div>
              <div class="mt-16 flex justify-center">
                <button class="px-8 py-4 border border-[#333] hover:border-primary text-gray-400 hover:text-primary rounded-lg uppercase tracking-widest text-xs font-bold transition-all flex items-center gap-2">
                  Load More Services
                  <span class="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  `
})
export class ServicesCatalogComponent {
  
  services = signal<Service[]>([
    {
      id: 1,
      name: 'Lip Neutralization',
      category: 'Medical Aesthetics',
      description: 'Advanced pigmentation correction technique to restore natural color and definition. Ideal for correcting cool tones or asymmetry with minimal downtime.',
      price: 1200,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R'
    },
    {
      id: 2,
      name: 'Evening Glamour',
      category: 'Professional Visage',
      description: 'High-end evening makeup application using luxury cosmetics. Focused on longevity, photogenic finish, and enhancing your unique facial architecture.',
      price: 600,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i'
    },
    {
      id: 3,
      name: 'HydraFacial Elite',
      category: 'Skin Therapy',
      description: 'The ultimate skin detox. A multi-step treatment that cleanses, exfoliates, and extracts impurities while infusing skin with hydrating serums.',
      price: 850,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu'
    },
    {
      id: 4,
      name: 'Botulinum Therapy',
      category: 'Medical Aesthetics',
      description: 'Medical-grade precision treatment to relax facial muscles, smoothing fine lines and wrinkles for a refreshed, youthful appearance.',
      price: 1500,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd'
    }
  ]);

  filterOptions = ['All Services', 'Medical Aesthetics', 'Professional Visage', 'Skin Therapy'];
  activeFilter = signal('All Services');

  filteredServices = computed(() => {
    const services = this.services();
    const filter = this.activeFilter();
    
    if (filter === 'All Services') {
        return services;
    }
    
    return services.filter(service => service.category === filter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
