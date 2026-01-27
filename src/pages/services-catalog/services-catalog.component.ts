
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Service {
  id: number;
  name: string;
  category: string; // The filter category
  displayCategory: string; // The category text shown on the card
  description: string;
  price: number;
  priceNote?: string;
  duration: string;
  imageUrl: string;
}

@Component({
  selector: 'app-services-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full animate-page-enter">
      <aside class="w-full lg:w-80 flex-shrink-0 border-r border-white/5 px-6 lg:px-10 py-12 bg-background-dark">
        <div class="lg:sticky lg:top-32">
          <div class="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
            <h3 class="text-white font-display text-2xl font-light italic flex items-center gap-3">
              Refine Selection
            </h3>
          </div>
          <div class="space-y-12">
            <div>
              <h4 class="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Expertise</h4>
              <div class="space-y-4">
                @for(category of filterOptions.categories; track category) {
                  <label class="flex items-center gap-3 group cursor-pointer">
                    <input 
                      [checked]="isCategoryActive(category)"
                      (change)="toggleCategory(category)"
                      class="w-3.5 h-3.5 border-white/20 bg-transparent text-gold focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" type="checkbox"/>
                    <span 
                      class="text-xs uppercase tracking-widest transition-colors"
                      [class]="isCategoryActive(category) ? 'text-gold font-bold' : 'text-text-muted group-hover:text-white'">
                      {{ category }}
                    </span>
                  </label>
                }
              </div>
            </div>
            <div>
              <h4 class="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Investment</h4>
              <div class="space-y-4">
                 @for(tier of filterOptions.priceTiers; track tier.label) {
                    <label class="flex items-center gap-3 group cursor-pointer">
                      <input 
                        name="price" type="radio"
                        [checked]="activePriceTier() === tier.label"
                        (change)="setPriceTier(tier.label)"
                        class="w-3.5 h-3.5 border-white/20 bg-transparent text-gold focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" />
                      <span
                        class="text-xs uppercase tracking-widest transition-colors"
                        [class]="activePriceTier() === tier.label ? 'text-gold font-bold' : 'text-text-muted group-hover:text-white'">
                        {{ tier.label }}
                      </span>
                    </label>
                 }
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main class="flex-1 px-4 lg:px-16 py-12">
        <div class="mb-16">
          <div class="flex flex-col mb-6">
            <span class="text-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4">The Collection</span>
            <h1 class="text-white text-5xl md:text-6xl font-display font-light leading-tight tracking-tight">Premium Services</h1>
          </div>
          <p class="text-text-muted text-lg font-light max-w-2xl leading-relaxed italic">A curated selection of world-class aesthetic medical treatments and professional visage artistry, tailored to the most discerning clientele.</p>
        </div>

        <div class="mb-16 max-w-3xl">
          <div class="relative group">
            <input #searchInput (input)="searchTerm.set(searchInput.value)" class="block w-full h-14 bg-transparent border-0 border-b border-white/10 text-white placeholder-text-muted/50 focus:border-gold focus:ring-0 transition-all text-xl font-display italic tracking-wide px-0" placeholder="Searching for your next transformation..." type="text"/>
            <div class="absolute right-0 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors">
              <span class="material-symbols-outlined text-3xl">search</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          @for(service of filteredServices(); track service.id) {
            <div class="group shimmer card-hover-glow relative flex flex-col bg-card-dark border border-white/5 transition-all duration-500">
              <div class="relative aspect-[4/3] overflow-hidden">
                <img [ngSrc]="service.imageUrl" alt="{{ service.name }}" width="600" height="600" priority class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"/>
                <div class="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
                <div class="absolute top-6 left-6">
                  <span class="text-[9px] font-bold text-gold uppercase tracking-[0.3em] bg-black/80 px-4 py-1 border border-gold/20">{{ service.displayCategory }}</span>
                </div>
              </div>
              <div class="p-8 flex flex-col flex-1">
                <h3 class="text-white text-3xl font-display font-light group-hover:text-gold transition-colors duration-300 mb-4">{{ service.name }}</h3>
                <p class="text-text-muted text-sm font-light leading-relaxed mb-8 line-clamp-2 italic">{{ service.description }}</p>
                <div class="mt-auto flex items-center justify-between pb-8 border-b border-white/5">
                  <div class="flex flex-col">
                    <span class="text-[10px] text-gold/70 uppercase tracking-[0.2em] font-bold mb-1">Honorarium</span>
                    <span class="text-gold text-2xl font-display font-medium">{{ service.price }} TJS <span *ngIf="service.priceNote" class="text-[10px] text-text-muted uppercase tracking-widest">{{ service.priceNote }}</span></span>
                  </div>
                  <div class="flex flex-col items-end">
                    <span class="text-[9px] text-text-muted uppercase tracking-[0.2em] font-bold mb-1">Timeframe</span>
                    <span class="text-white font-light text-sm tracking-widest uppercase">{{ service.duration }}</span>
                  </div>
                </div>
                <button class="mt-8 w-full gold-gradient-bg text-black font-bold text-[11px] uppercase tracking-[0.3em] py-5 shadow-[0_10px_20px_-10px_rgba(212,175,55,0.3)] hover:brightness-110 hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3">
                  <span>Book Appointment</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          } @empty {
             <div class="md:col-span-2 text-center py-20 border border-dashed border-white/10">
                <span class="material-symbols-outlined text-gold/30 text-5xl">sentiment_dissatisfied</span>
                <h3 class="mt-4 font-display text-2xl text-white">No Services Found</h3>
                <p class="mt-2 text-text-muted italic">Please adjust your search or filter criteria.</p>
             </div>
          }
        </div>

        <div class="mt-24 flex flex-col items-center">
          <button class="group relative px-12 py-5 border border-gold/30 hover:border-gold transition-all duration-500">
            <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-gold group-hover:text-white transition-colors">Examine Further Results</span>
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500"></div>
          </button>
          <p class="mt-8 text-text-muted text-[10px] uppercase tracking-[0.2em]">Displaying {{ filteredServices().length }} of 4 Exceptional Services</p>
        </div>
      </main>
    </div>
  `
})
export class ServicesCatalogComponent {
  
  services = signal<Service[]>([
    {
      id: 1, name: 'Hyaluronic Lip Contour', displayCategory: 'Aesthetics', category: 'Medical Aesthetics',
      description: "Precision enhancement for natural volume and sculptural definition using the world's most elite dermal fillers.",
      price: 3500, duration: '45 Minutes',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmTzC27oxmArD14ByyN7Tnk1sOiW0KkMQWS8ybC4AbH4Gnpuck1MeJ5JyykX1-HcjPolPF1qWY42Uvp5YPp0q4OJoDPvc2Wd0mzLwrfwKcmreM2jLU1L4f0Pg4jidZZWUiC4cd8BV0mD5FYajUXA9F13Z8LEm9OOeDNkHjcv3I87tP0v_oRFFxYgjNzmxDa-RgRPJ8ZXQT7eHY22QI8bq0nfRKJsXfAcsOnbEVB42YMalLNYcASzm7pHdK6gTM_7Wpu79MfB1-GdJr'
    },
    {
      id: 2, name: 'Gold Radiance Facial', displayCategory: 'Therapy', category: 'Skin Therapy',
      description: 'An opulent 24-karat gold infused mask therapy designed for ultimate dermal rejuvenation and cellular glow.',
      price: 2800, duration: '60 Minutes',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVNlTjYkSNSjPjz2IHHVXuO9R7jxgFyIBGykErEjdFZYWPHD7VReXl0eCsXt_uMEFpCFGeMWY5AEfEOSIBk7fbX2penrpGR9nshDbhFYL1akSIACfD_AJhrXv3PMr1wMUXTQO42gD9Cn1_CxEt7ElIkBfF19gM4nmWLdEvjsCoWGB-866VqJnRFhG-lKiJr9mxMvXxTLtqE2K5Sxyz_e8OLc0UKTPQDt5-OaAJ6rsf4Bj_HIp5XrpNPIGAdW9usGYfmDtMsBPhjOv_'
    },
    {
      id: 3, name: 'Bridal Visage Premium', displayCategory: 'Visage', category: 'Professional Visage',
      description: 'A complete bridal transformational journey including trial sessions and on-site editorial artistry.',
      price: 4500, duration: '120 Minutes',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHI4Qur3WSGJ8dtvt4q2b5279eTiMhWgOAXMY8cd3tBDm7vhT2rwLU6yqP-cDaHw3iJtq2mcfN1_Eas5Mbu6zk5u02cH6_5rQdHsLK0eTdyEYw-YUawGSBSp6Uo2qfKfifMXfa3dmHGhX9GIxivc1e-KFbrxfysGLlCWZDXszdaPZTGRRlPgyoBznM7jaVHoJEDBpvOyBWGb1fODLDSVLtz4bFl082OM2cfU5FwuuKHPi3x3gZRen1t19EyJxIelVjYAtLlWlkQ5-X'
    },
    {
      id: 4, name: 'Botulinum Toxin Therapy', displayCategory: 'Medical', category: 'Medical Aesthetics',
      description: 'Expertly administered neuromodulators for seamless age-defying results and facial harmony.',
      price: 120, priceNote: '/ unit', duration: '30 Minutes',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlYKk8xLdJNxfnlXF1tRkW1CLnGF8YJybuLSLJgYxlE7tAZkDC-1lOgU9DPKSWE4wvvU8Iogu5nt1ectLkfCo0SmE5NBNhMEMZjjzkOAZMCLKCYJwFzQpmd1g9_0f27_gvtvv6UY22eLZXQz0I6ZPFCiS-hQ430ByMP7hoPCp-EhVIgX-5-icPpmOYnJc8J00xjVo0pVHxh-DHBFikwANq8vKH1C7x_jiSyc6ukVu42ky34UGPzhe2GMTN9_l_Vz9S-MTKeHv-yXCP'
    },
  ]);

  filterOptions = {
    categories: ['All Treatments', 'Medical Aesthetics', 'Professional Visage', 'Skin Therapy'],
    priceTiers: [
      { label: 'All Tiers', min: 0, max: Infinity },
      { label: '1000 - 3000 TJS', min: 1000, max: 3000 },
      { label: '3000 - 5000 TJS', min: 3001, max: 5000 },
      { label: '5000+ TJS', min: 5001, max: Infinity }
    ]
  };

  activeCategories = signal<string[]>(['All Treatments']);
  activePriceTier = signal<string>('All Tiers');
  searchTerm = signal<string>('');

  filteredServices = computed(() => {
    const services = this.services();
    const categories = this.activeCategories();
    const priceTierLabel = this.activePriceTier();
    const term = this.searchTerm().toLowerCase();
    
    const priceTier = this.filterOptions.priceTiers.find(t => t.label === priceTierLabel) ?? this.filterOptions.priceTiers[0];

    return services.filter(service => {
      const categoryMatch = categories.includes('All Treatments') || categories.includes(service.category);
      const priceMatch = service.price >= priceTier.min && service.price <= priceTier.max;
      const searchMatch = !term || service.name.toLowerCase().includes(term) || service.description.toLowerCase().includes(term);
      return categoryMatch && priceMatch && searchMatch;
    });
  });

  isCategoryActive(category: string): boolean {
    return this.activeCategories().includes(category);
  }
  
  toggleCategory(category: string) {
    this.activeCategories.update(current => {
      if (category === 'All Treatments') {
        return ['All Treatments'];
      }
      
      let newCategories = current.filter(c => c !== 'All Treatments');
      if (newCategories.includes(category)) {
        newCategories = newCategories.filter(c => c !== category);
      } else {
        newCategories.push(category);
      }
      
      return newCategories.length === 0 ? ['All Treatments'] : newCategories;
    });
  }

  setPriceTier(label: string) {
    this.activePriceTier.set(label);
  }
}
