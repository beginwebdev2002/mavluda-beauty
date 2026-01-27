
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  statusTag?: string;
  width: number;
  height: number;
  effects?: string;
  aspectClass?: string;
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="animate-page-enter">
      <main class="flex-grow">
        <!-- Header Section -->
        <section class="relative pt-24 pb-12 text-center">
            <div class="mx-auto max-w-3xl px-6">
                <p class="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-pulse">Excellence in Detail</p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Portfolio <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#edd685] to-primary">Gallery</span>
                </h1>
                <p class="text-gray-400 text-lg leading-relaxed">
                    A curated showcase of transformative medical aesthetics and high-fashion visage artistry. Witness the convergence of science and beauty.
                </p>
            </div>
            <div class="mt-12 flex flex-wrap justify-center gap-4 px-4">
                @for(filter of filters; track filter) {
                    <button 
                      (click)="activeFilter.set(filter)"
                      class="px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-300"
                      [class]="activeFilter() === filter
                        ? 'bg-primary text-background-dark font-bold shadow-gold transform -translate-y-0.5'
                        : 'bg-[#1A1A1A] border border-[#333] text-gray-400 hover:text-white hover:border-primary/50 hover:bg-[#222]'"
                    >
                        {{ filter }}
                    </button>
                }
            </div>
        </section>

        <!-- Masonry Gallery -->
        <section class="px-6 lg:px-8 pb-24">
            <div class="mx-auto max-w-7xl">
                <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    @for(item of filteredItems(); track item.id) {
                        <div class="break-inside-avoid group relative rounded-3xl bg-gray-900 overflow-hidden cursor-pointer hover-shimmer-border">
                            @if (item.aspectClass) {
                                <div class="relative w-full" [class]="item.aspectClass">
                                    <img [ngSrc]="item.imageUrl" [alt]="item.title" [width]="item.width" [height]="item.height"
                                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        [class]="item.effects || ''"/>
                                </div>
                            } @else {
                                <img [ngSrc]="item.imageUrl" [alt]="item.title" [width]="item.width" [height]="item.height"
                                    class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    [class]="item.effects || ''"/>
                            }
                            
                            @if(item.statusTag) {
                                <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-20">
                                    <span class="text-xs font-bold text-white uppercase">{{ item.statusTag }}</span>
                                </div>
                            }

                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">
                                <span class="text-primary text-xs font-bold uppercase tracking-widest mb-2">{{ item.category }}</span>
                                <h3 class="text-white text-xl font-bold font-serif">{{ item.title }}</h3>
                                <p class="text-gray-300 text-sm mt-2 line-clamp-2">{{ item.description }}</p>
                            </div>
                        </div>
                    }
                </div>

                <div class="mt-16 flex justify-center">
                    <button class="group flex items-center gap-3 px-8 py-4 bg-transparent border border-[#333] hover:border-primary rounded-full transition-all duration-300">
                        <span class="text-sm font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">Load More Works</span>
                        <span class="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors group-hover:translate-y-1">expand_more</span>
                    </button>
                </div>
            </div>
        </section>
      </main>
    </div>
  `
})
export class PortfolioPageComponent {
  filters = ['All Works', 'Medical Aesthetics', 'Professional Visage', 'Editorial'];
  activeFilter = signal('All Works');

  portfolioItems = signal<PortfolioItem[]>([
    {
      id: 1,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R',
      category: 'Editorial',
      title: 'Vogue Feature 2024',
      description: 'High-contrast artistic makeup focusing on natural glow and contour definition.',
      width: 800, height: 1000
    },
    {
      id: 2,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd',
      category: 'Medical Aesthetics',
      title: 'Full Face Harmonization',
      description: 'Non-surgical rhinoplasty and chin augmentation profile balancing.',
      statusTag: 'Healed Result',
      width: 800, height: 1200
    },
    {
      id: 3,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu',
      category: 'Professional Visage',
      title: 'Bridal Radiance',
      description: 'Long-wear, photographic finish for luxury weddings.',
      width: 1000, height: 800
    },
    {
      id: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R',
      category: 'Editorial',
      title: 'Golden Hour Series',
      description: 'Concept shoot exploring texture and metallic tones.',
      effects: 'grayscale group-hover:grayscale-0',
      width: 800, height: 1067,
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i',
      category: 'Medical Aesthetics',
      title: 'Signature Lip Contour',
      description: 'Russian technique volume enhancement with natural borders.',
      statusTag: '4 Weeks Post-Op',
      width: 800, height: 1000
    },
    {
      id: 6,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd',
      category: 'Medical Aesthetics',
      title: 'Age-Defying Protocol',
      description: 'Full face lifting using advanced thread techniques.',
      effects: 'sepia-[.2] group-hover:sepia-0',
      width: 800, height: 1000
    },
    {
      id: 7,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu',
      category: 'Professional Visage',
      title: 'Color Theory',
      description: 'Masterclass demonstration look.',
      width: 800, height: 800,
      aspectClass: 'aspect-square',
    }
  ]);

  filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All Works') {
      return this.portfolioItems();
    }
    return this.portfolioItems().filter(item => item.category === filter);
  });
}
