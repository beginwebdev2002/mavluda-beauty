
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  statusTag?: string;
  effects?: string;
  aspectClass: string;
}

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
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
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 2,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd',
      category: 'Medical Aesthetics',
      title: 'Full Face Harmonization',
      description: 'Non-surgical rhinoplasty and chin augmentation profile balancing.',
      statusTag: 'Healed Result',
      aspectClass: 'aspect-[2/3]',
    },
    {
      id: 3,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu',
      category: 'Professional Visage',
      title: 'Bridal Radiance',
      description: 'Long-wear, photographic finish for luxury weddings.',
      aspectClass: 'aspect-[5/4]',
    },
    {
      id: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R',
      category: 'Editorial',
      title: 'Golden Hour Series',
      description: 'Concept shoot exploring texture and metallic tones.',
      effects: 'grayscale group-hover:grayscale-0',
      aspectClass: 'aspect-[3/4]',
    },
    {
      id: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i',
      category: 'Medical Aesthetics',
      title: 'Signature Lip Contour',
      description: 'Russian technique volume enhancement with natural borders.',
      statusTag: '4 Weeks Post-Op',
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 6,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd',
      category: 'Medical Aesthetics',
      title: 'Age-Defying Protocol',
      description: 'Full face lifting using advanced thread techniques.',
      effects: 'sepia-[.2] group-hover:sepia-0',
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 7,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu',
      category: 'Professional Visage',
      title: 'Color Theory',
      description: 'Masterclass demonstration look.',
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
