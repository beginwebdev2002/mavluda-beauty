
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Veil {
  id: number;
  name: string;
  sku: string;
  length: string;
  material: string;
  tiers: string;
  edge: string;
  price: number;
  stock: number;
  image: string;
}

@Component({
  selector: 'app-veil-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Main Page Content -->
    <div class="space-y-8 animate-page-enter relative z-0">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 class="text-4xl font-serif text-gray-900 tracking-tight">Veil Collection</h2>
          <p class="text-gray-500 mt-2 font-light text-lg">Exquisite bridal veils and their characteristics.</p>
        </div>
        <button (click)="openAddModal()" class="px-6 py-3 bg-[#0A0A0A] text-white rounded-lg shadow-lg hover:bg-gold hover:shadow-gold/30 transition-all duration-300 font-medium flex items-center gap-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-90 transition-transform"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add New Veil
        </button>
      </div>

      <!-- Veil Characteristics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        @for (veil of veils(); track veil.id) {
          <div class="group bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-gold hover:border-gold/20 transition-all duration-500 relative overflow-hidden">
            <!-- Decorative background element for luxury feel -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/5 to-transparent rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-700 pointer-events-none"></div>
            
            <div class="relative z-10">
              <!-- Top Row: Image and Price -->
              <div class="flex justify-between items-start mb-6">
                 <div class="relative cursor-pointer" (click)="openImageModal(veil.image)">
                    <div class="w-16 h-16 rounded-full overflow-hidden border border-gray-100 shadow-md group-hover:ring-2 group-hover:ring-gold/30 transition-all duration-500 relative">
                      <img [src]="veil.image" [alt]="veil.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                      
                      <!-- Hover Overlay Icon -->
                      <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg>
                      </div>
                    </div>
                 </div>
                 <span class="font-serif text-xl font-bold text-gray-900">{{ veil.price }} TJS</span>
              </div>

              <!-- Title and SKU -->
              <div class="mb-8">
                <h3 class="text-[26px] leading-tight font-serif text-gray-900 mb-2 group-hover:text-gold transition-colors duration-300">{{ veil.name }}</h3>
                <p class="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold font-sans">{{ veil.sku }}</p>
              </div>

              <!-- Characteristics List -->
              <div class="space-y-3.5 bg-gray-50/50 p-6 rounded-2xl border border-gray-50/80 mb-8">
                 <div class="flex justify-between text-sm items-center">
                    <span class="text-gray-500 font-medium">Length</span>
                    <span class="font-bold text-gray-900 text-right font-serif tracking-wide">{{ veil.length }}</span>
                 </div>
                 <div class="flex justify-between text-sm items-center">
                    <span class="text-gray-500 font-medium">Material</span>
                    <span class="font-bold text-gray-900 text-right font-serif tracking-wide">{{ veil.material }}</span>
                 </div>
                 <div class="flex justify-between text-sm items-center">
                    <span class="text-gray-500 font-medium">Tier</span>
                    <span class="font-bold text-gray-900 text-right font-serif tracking-wide">{{ veil.tiers }}</span>
                 </div>
                 <div class="flex justify-between text-sm items-center">
                    <span class="text-gray-500 font-medium">Edge Finish</span>
                    <span class="font-bold text-gray-900 text-right font-serif tracking-wide">{{ veil.edge }}</span>
                 </div>
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-2">
                 <div class="flex items-center gap-2.5">
                    <span class="relative flex h-2.5 w-2.5">
                      @if (veil.stock > 0) {
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      } @else {
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                      }
                    </span>
                    <span class="text-sm font-medium text-gray-600">{{ veil.stock > 0 ? veil.stock + ' Available' : 'Out of Stock' }}</span>
                 </div>
                 <button (click)="openEditModal(veil)" class="text-gold hover:text-gold-dark text-[11px] font-bold uppercase tracking-[0.2em] hover:underline transition-all decoration-gold/50 underline-offset-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                    DETAILS
                 </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>

    <!-- Edit Modal -->
    @if (isEditModalOpen()) {
       <div class="fixed inset-0 z-[120] overflow-y-auto" role="dialog" aria-modal="true">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in" (click)="closeEditModal()"></div>
          
          <div class="flex min-h-screen items-center justify-center p-4">
             <div class="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-gold/10 animate-slide-up">
                
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 class="text-xl font-serif font-bold text-gray-900">
                    {{ tempVeil.id === 0 ? 'Add New Veil' : 'Edit Veil Details' }}
                  </h3>
                  <button (click)="closeEditModal()" class="text-gray-400 hover:text-gray-500 transition-colors">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div class="px-6 py-6 space-y-6">
                   <!-- Top Section: Name and Price -->
                   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Veil Name</label>
                        <input type="text" [(ngModel)]="tempVeil.name" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                      </div>
                       <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Price (TJS)</label>
                        <input type="number" [(ngModel)]="tempVeil.price" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                      </div>
                   </div>

                   <!-- SKU & Stock -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">SKU</label>
                        <input type="text" [(ngModel)]="tempVeil.sku" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                      </div>
                       <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Stock Quantity</label>
                        <input type="number" [(ngModel)]="tempVeil.stock" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                      </div>
                   </div>

                   <!-- Characteristics Divider -->
                   <div class="relative">
                      <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-200"></div>
                      </div>
                      <div class="relative flex justify-start">
                        <span class="bg-white pr-2 text-sm text-gray-500 font-medium tracking-wide">Characteristics</span>
                      </div>
                    </div>

                    <!-- Characteristics Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div class="space-y-2">
                          <label class="block text-sm font-medium text-gray-700">Length</label>
                          <input type="text" [(ngModel)]="tempVeil.length" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                       </div>
                       <div class="space-y-2">
                          <label class="block text-sm font-medium text-gray-700">Material</label>
                          <input type="text" [(ngModel)]="tempVeil.material" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                       </div>
                       <div class="space-y-2">
                          <label class="block text-sm font-medium text-gray-700">Tier</label>
                           <select [(ngModel)]="tempVeil.tiers" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                             <option>Single</option>
                             <option>Double</option>
                             <option>Triple</option>
                           </select>
                       </div>
                       <div class="space-y-2">
                          <label class="block text-sm font-medium text-gray-700">Edge Finish</label>
                          <input type="text" [(ngModel)]="tempVeil.edge" class="block w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 focus:bg-white focus:border-gold focus:ring-gold sm:text-sm p-2.5 transition-all">
                       </div>
                    </div>
                </div>

                <div class="bg-gray-50 px-6 py-4 flex flex-row-reverse border-t border-gray-100 gap-3">
                  <button (click)="saveVeil()" type="button" class="inline-flex justify-center rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/50 transition-all transform active:scale-95">
                    {{ tempVeil.id === 0 ? 'Create Veil' : 'Save Changes' }}
                  </button>
                  <button (click)="closeEditModal()" type="button" class="inline-flex justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                    Cancel
                  </button>
                </div>
             </div>
          </div>
       </div>
    }

    <!-- Image Modal (Placed outside main flow to ensure it covers header) -->
    @if (selectedImage()) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-fade-in" (click)="closeImageModal()"></div>
          
          <!-- Close Button (Fixed to viewport) -->
          <button (click)="closeImageModal()" class="fixed top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer">
              <span class="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <!-- Modal Content -->
          <div class="relative z-[105] w-full h-full p-4 md:p-12 flex flex-col items-center justify-center pointer-events-none">
              <!-- Image Container with Spinner -->
              <div class="pointer-events-auto relative rounded-lg overflow-hidden shadow-2xl bg-transparent animate-slide-up flex items-center justify-center min-w-[300px] min-h-[300px]">
                 
                 <!-- Loading State -->
                 @if (isImageLoading()) {
                    <div class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                        <div class="w-12 h-12 border-4 border-white/20 border-t-gold rounded-full animate-spin mb-3"></div>
                        <p class="text-white/60 text-[10px] uppercase tracking-[0.2em] font-medium animate-pulse">Loading Asset</p>
                    </div>
                 }

                 <img [src]="selectedImage()" 
                      (load)="onImageLoad()"
                      alt="Veil Detail" 
                      class="max-w-full max-h-[85vh] object-contain shadow-2xl transition-all duration-700 ease-out"
                      [class.opacity-0]="isImageLoading()"
                      [class.scale-95]="isImageLoading()"
                      [class.opacity-100]="!isImageLoading()"
                      [class.scale-100]="!isImageLoading()"
                 >
              </div>
              
              <p class="text-white/40 text-xs mt-6 font-medium tracking-[0.3em] uppercase animate-fade-in text-center">Mavluda Beauty • Wedding Collection</p>
          </div>
      </div>
    }
  `
})
export class VeilPageComponent {
  veils = signal<Veil[]>([
    { 
      id: 1, 
      name: 'Royal Cathedral', 
      sku: 'VL-CATH-001', 
      length: '120" (300cm)', 
      material: 'Italian Silk Tulle', 
      tiers: 'Single', 
      edge: 'Raw Cut', 
      price: 850, 
      stock: 3,
      image: 'https://picsum.photos/seed/wedding_veil_royal/200/200' 
    },
    { 
      id: 2, 
      name: 'Vintage Lace', 
      sku: 'VL-LACE-042', 
      length: '45" (115cm)', 
      material: 'French Chantilly', 
      tiers: 'Double', 
      edge: 'Scalloped Lace', 
      price: 1200, 
      stock: 1,
      image: 'https://picsum.photos/seed/bride_lace_vintage/200/200' 
    },
    { 
      id: 3, 
      name: 'Crystal Fingertip', 
      sku: 'VL-FING-009', 
      length: '40" (100cm)', 
      material: 'Soft Illusion', 
      tiers: 'Single', 
      edge: 'Swarovski Crystal', 
      price: 450, 
      stock: 8,
      image: 'https://picsum.photos/seed/crystal_veil/200/200' 
    },
    { 
      id: 4, 
      name: 'Modern Blusher', 
      sku: 'VL-BLSH-015', 
      length: '30" (75cm)', 
      material: 'Stiff Netting', 
      tiers: 'Double', 
      edge: 'Satin Ribbon', 
      price: 280, 
      stock: 12,
      image: 'https://picsum.photos/seed/modern_bride/200/200' 
    },
    { 
      id: 5, 
      name: 'Ethereal Waltz', 
      sku: 'VL-WLTZ-022', 
      length: '60" (150cm)', 
      material: 'English Net', 
      tiers: 'Single', 
      edge: 'Pearl Scatter', 
      price: 620, 
      stock: 0,
      image: 'https://picsum.photos/seed/ethereal_wedding/200/200' 
    },
    { 
      id: 6, 
      name: 'Bohemian Drape', 
      sku: 'VL-BOHO-007', 
      length: 'Custom', 
      material: 'Chiffon', 
      tiers: 'Single', 
      edge: 'Floral Applique', 
      price: 550, 
      stock: 4,
      image: 'https://picsum.photos/seed/boho_wedding/200/200' 
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
       length: '',
       material: '',
       tiers: 'Single',
       edge: '',
       price: 0,
       stock: 0,
       image: `https://picsum.photos/seed/veil_${Math.random()}/200/200`
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
    const largeImageUrl = imageUrl.replace('/200/200', '/1200/1200');
    this.selectedImage.set(largeImageUrl);
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
