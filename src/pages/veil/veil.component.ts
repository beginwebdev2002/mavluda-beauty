
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Veil {
  id: number;
  name: string;
  sku: string;
  silhouette: string;
  neckline: string;
  fabric: string;
  trainLength: string;
  price: number;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-veil-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './veil.component.html',
  styleUrls: ['./veil.component.scss']
})
export class VeilPageComponent {
  veils = signal<Veil[]>([
    { 
      id: 1, 
      name: 'Graceful Mermaid', 
      sku: 'GWN-MRMD-001', 
      silhouette: 'Mermaid', 
      neckline: 'Sweetheart', 
      fabric: 'Satin & Lace', 
      trainLength: 'Chapel', 
      price: 5500, 
      stock: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYJZKE2OznoVsAA9839xUDnnl1kqro7VvzLTjmgQIaPJU-4-cPrXqGvBqHTts0ZnhMBdPac6p5NZKKdTsmuoSiPvbSSn5L00I65wLqEApPvyjMWv_VzGbWG2G2dqUZf4gAGkw5ryR87NTPhcAN-3kSg7a8v5zrhpIgbTcdVQSljMnf6kE-HdHvZZg3Yd_W89fI0BC1MY6bBgpntZmuHFUiQhf4ShzqidpnWfwi-o_gsnR_4CA3_I5PPzutSWYT50ee1_7ReP4U1mSU' 
    },
    { 
      id: 2, 
      name: 'Ethereal A-Line', 
      sku: 'GWN-ALIN-042', 
      silhouette: 'A-Line', 
      neckline: 'V-Neck', 
      fabric: 'Chiffon', 
      trainLength: 'Sweep', 
      price: 7200, 
      stock: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWF6WFe7FdgQeTtYMo-_sJsukWlBAzu_JXY0IpyxNdWJhF1R8s0nN5z54lpyOuJu72r5r9hXdl7ep0DpNYZdpOdP1pJtK8T3fNsK7tZgiTYxJrfnTZ9K2ExaDrwjwNGoVbiBCjs6b75I6Y5wgRAJDPTuoQ5MZMhCpw9ugqC252XHlghq3BkWZ5AhldhwaJKYWe5ElGnuLBp7JbbcXgjjercBHfJ8EumEyL_wxl4sEVMoSE6_B2SYe4WGGxhLQWrxfTPXTNJ_u5exRc' 
    },
    { 
      id: 3, 
      name: 'Royal Ballgown', 
      sku: 'GWN-BALL-009', 
      silhouette: 'Ball Gown', 
      neckline: 'Off-Shoulder', 
      fabric: 'Tulle & Beading', 
      trainLength: 'Cathedral', 
      price: 9500, 
      stock: 0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLNsy-Z78v2Idm4C1RlAwS9Ya2miafqACgCm0cuCC47RNE4PDBLsYFUlTaxA22FanGY7Gbqs_xbwbUXnKDkZ47Q2XVtEN9spN6MURbWCedhIXij9cp61IaeWFSueHUbTo15MvzAMvos8ZkdlXEdPj-f2QMuvkBFqKbu-M7uk8xWyaPMnalnJisuFvrfupd36WeGvVqnxceZbjaAU7_EO2a1bnoDKwjr4bXF_ufk5GnL7mcf-zmmJv4ZKuojekSEg6fMgsOlYJbhsw-' 
    },
    { 
      id: 4, 
      name: 'Modern Sheath', 
      sku: 'GWN-SHTH-015', 
      silhouette: 'Sheath', 
      neckline: 'Halter', 
      fabric: 'Crepe', 
      trainLength: 'Court', 
      price: 4800, 
      stock: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaGh8P7jqFns8SKW-G4QdpTl_FywQ93XsspB50ARTDhUw_jFC1XtFiOwIZ_fAXFlWr3Z-Il_KUBd9_fYsjuLRBlj4kihNDU8zmCohUWyOpiLS9MBzYZsfe5eCv-5bf2eP9BedKZqZuA_IDgOoCL2fH4sqo1L1ID5al0t45cwIqvMNLJzu56WtHqPelAqpNp5ZmzrRc-vI9wkkIJfeznXyH0Wzcjy7i_Zrugd2QHXnrF1qIQPwkCWCR3GPfwaExt_cN10cwuSplhO12' 
    },
    { 
      id: 5, 
      name: 'Lace Trumpet', 
      sku: 'GWN-TRMP-021', 
      silhouette: 'Trumpet', 
      neckline: 'Illusion', 
      fabric: 'Alençon Lace', 
      trainLength: 'Chapel', 
      price: 6100, 
      stock: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU3eqKdpVzNir9nXjsL9xWw5OT70qRZJK9S4rpq1248iYdjAA7daylppGkzNJhIpLtMrWeVBM49w87gUznQU1bjof3EGn4znTV-30R1Ga0I_4onMhzgVK7UJDBSBbKP-LBKVsccsH-yNBQbl2G2rTNNiKkz0d4mLifFu8I4M8_c3eET9UrVj63hG-cCJKiaTk6h_bVxBbcxvLvBR4CF3sL-4lbTWOcNuB9u7EwJ2uWEqGU7vxlrxASCfXiFY8Q9rc_8IGeg9-MmwVT' 
    },
    { 
      id: 6, 
      name: 'Boho Breeze', 
      sku: 'GWN-BOHO-033', 
      silhouette: 'Empire', 
      neckline: 'Square', 
      fabric: 'Crochet Lace', 
      trainLength: 'Sweep', 
      price: 3900, 
      stock: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzBw6_6DhiHf7t5yKW7fWBtjn15BUko_QOOFXqjJzCR-f053gaM_-lf3mkdL7QrFSUstj3r0oKsvvis_Al3lkt7Bm1YszG_e95VBdHxznS7mX6xmKHOe7gGfi5aiaW6n22OkbZrkO2PA1Pmjd5L1wjTxBJH3pmPqnpf90VuF4KPA8mDJvCCsxq2eHHWW2eZKk6_575bMuh-GF0bE8KM22gnT7t8DBUCjPCXJixp9pA3MRiauioEQjWN5krobLZBVjl_ny0C_cK8y67' 
    },
  ]);

  selectedImage = signal<string | null>(null);
  
  // Edit Modal State
  isEditModalOpen = signal(false);
  isImageLoading = signal(false);
  tempVeil: Veil = this.getEmptyVeil();

  getEmptyVeil(): Veil {
    return {
       id: 0,
       name: '',
       sku: '',
       silhouette: '',
       neckline: '',
       fabric: '',
       trainLength: '',
       price: 0,
       stock: 0,
       image: ''
    };
  }

  // Edit Methods
  openAddModal() {
     this.tempVeil = this.getEmptyVeil();
     this.isEditModalOpen.set(true);
  }

  openEditModal(veil: Veil) {
     this.tempVeil = { ...veil };
     this.isEditModalOpen.set(true);
  }

  closeEditModal() {
     this.isEditModalOpen.set(false);
  }

  saveVeil() {
     this.veils.update(currentVeils => {
        if (this.tempVeil.id === 0) {
           // Create
           const newId = currentVeils.length > 0 ? Math.max(...currentVeils.map(v => v.id)) + 1 : 1;
           return [...currentVeils, { ...this.tempVeil, id: newId }];
        } else {
           // Update
           return currentVeils.map(v => v.id === this.tempVeil.id ? { ...this.tempVeil } : v);
        }
     });
     this.closeEditModal();
  }

  // Image Modal Methods
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
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            // Update the tempVeil's image property to the base64 string for preview
            this.tempVeil.image = e.target.result;
        };
        reader.readAsDataURL(file);
    }
  }
}
