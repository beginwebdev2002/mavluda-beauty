
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface Gown {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

@Component({
  selector: 'app-veils-catalog',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './veils-catalog.component.html',
  styleUrls: ['./veils-catalog.component.scss']
})
export class VeilsCatalogComponent {
  filters = ['All Gowns', 'A-Line', 'Mermaid', 'Ballgown', 'Royal Train'];
  activeFilter = signal('All Gowns');

  gowns = signal<Gown[]>([
    {
      id: 1,
      name: 'The Seraphina',
      price: 3200,
      category: 'Mermaid',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPN9ZYjBjNe1xf9qvV4bzubf_wEbx_sB2_nsh26nzBI7NvBuvWyKAWusfJ1Bn00XdTfdRymam6QNplJzyEbbgar0lMd57o7BPyCGRcfndKCFR-7KzHDsv0uFtSqwuXOv4fVx4N05e0-dq4CqIBYsuQXflIu2t3jXEz3Bkl5f81ToAHjIpLZUloOEkDBA1m0B7zAW-ZKEwH-p4EoNgCo-FxUpMnISsPU7nO8Q5AClLganSui3XH6elW4lK0vzJsWKqF64qnuwDhMqs0'
    },
    {
      id: 2,
      name: 'The Ophelia',
      price: 4500,
      category: 'A-Line',
      isNew: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvBXMhijbkeWuTJe6iz4vpEBw5QKZV5g0iW0qn05Frk-ZdBXKXnKVPBxsWBw1BSPaqaakSmdyBowh91RYpsOGQINISSXguPmFnqE_yuvmmw5EzX-Silu6fVG26ylQTBOsAzpGKGpT9LKBWYk25bg9-ia4LiHnsPSZOEQzPhNOY0kZRmcGGxeuh_iotzW2fehOGPHTtU-23RzUi0RDrHAWBQJOh-uO36vHujHCPol80xO6RRpIHzwDNBdrSRhjDh3OrY72WeA2g519D'
    },
    {
      id: 3,
      name: 'The Aurora',
      price: 2800,
      category: 'A-Line', // Mapped based on look
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSbP-RdHyFzlwxwViGgArKEs3JCMevxWdvgZg-wdLsFel_GlKzDRwjG7tWfFwtbvu0O27WNQ9r5UQFHokkJMIgrPcoX0l8kXXvoQcTzNkWDr4U9h2tgeDDUWI_Pmuo8Dlgqn9EcQSOu7BDTHzdxYd83Yd7fQhNwKl-B4bU_-kkeDVs43JVAPpHJ0wj2_V1Y1OgivEgcnKxA3fWUhg62hm7QTHaYpxQtj6Gr7GUirYLtWKaSN2GMe_ahMiTibVFZbk_VEoQNqcgUHGg'
    },
    {
      id: 4,
      name: 'The Genevieve',
      price: 3900,
      category: 'Royal Train',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEoyJDKtNxRwjtLdc2qoZXdVdgj7ljbVxzQ9HtevuVyc49_s1MeZXZIgUJZDhFlSAV116SdeyVSaK63gIP6iZAdC-VMbYGi6ze58BoOEcoN1YNACTNHt_Cmb7Pjq031yfRU9Vz2Ye5zBQ7mQCdLNLAJOOijW6KczYX6ul5OgGI7Em2q2sMVwg6sMifL0NMv9SwnsBu_p8c0dmsEpwfWHInqkOUVYYI74PIslm6rtlkmaMZmkOctSf26Soz6LN9bRsSNEVuBOvPiWg2'
    },
    {
      id: 5,
      name: 'The Celeste',
      price: 2400,
      category: 'A-Line',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTjP3AA3j3uxerSRZg7Mo59nEreyRmXds-T40IouCF2wP_KD9rcWsTCr0ie06VcG5CJpyKL3cjjsaabHGn62juLI66s08o5Eqy6dLajWMo_uVcJVTGuTmPCN9P0ZYsq8hyUjBDCJpnCY0kXdnA1gfe31mjUI1tRWRrPUqcqxXd-FzUsBw_IKecVhv8mSb85aDpn9fwPAoZzL8nKmaQ8s9jtOgHliHzQlVh5MrRMx8IhjtK7kN6hy56iGovwyfr0R_rUCsYFTTRtGPB'
    },
    {
      id: 6,
      name: 'The Victoria',
      price: 5200,
      category: 'Ballgown',
      isBestSeller: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL07wAKbLoDac98zQPaD2snJrNfQcqjyNZ6U8KEwT9pzEdw7uPTnxazuCc1lTxzOh2ZOSBE-XQrw3MAgQhJuzii7Eo_58JaQhosutkFD54IejyfAH3nxR8WMlanOreUg0NkIPiNUMcpvHQKGOA2PjdZ-lVr_TvCh3QNI4pc9tRBzKal_SqvKnhGMvfrvXmHC6nxtEofmcd5ZQcbOB9kSg08jkbHYtl2E_qW1fCTf3GMLQ8bTaw-ZMHgCTFoiMoM29-3dLos5PLy7lr'
    }
  ]);

  filteredGowns = computed(() => {
    const currentFilter = this.activeFilter();
    if (currentFilter === 'All Gowns') {
      return this.gowns();
    }
    return this.gowns().filter(g => g.category === currentFilter);
  });
  
  // Full Screen Image Modal State
  selectedImage = signal<string | null>(null);
  isImageLoading = signal(false);

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  openImageModal(imageUrl: string) {
    this.selectedImage.set(imageUrl);
    this.isImageLoading.set(true);
  }

  closeImageModal() {
    this.selectedImage.set(null);
    this.isImageLoading.set(false);
  }

  onImageLoad() {
    this.isImageLoading.set(false);
  }
}
