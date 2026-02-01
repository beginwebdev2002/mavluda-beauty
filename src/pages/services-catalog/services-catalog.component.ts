
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
  templateUrl: './services-catalog.component.html',
  styleUrls: ['./services-catalog.component.scss']
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
