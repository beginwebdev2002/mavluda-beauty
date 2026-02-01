
import { Component, ChangeDetectionStrategy, signal, computed, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ImageStatus = 'published' | 'draft';
type ImageCategory = 'All' | 'Visage' | 'Medical Spa' | 'Bridal Veils' | 'Interior' | 'Product';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  filename: string;
  category: ImageCategory;
  date: string;
  status: ImageStatus;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-8 pb-20 animate-page-enter">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 class="font-serif text-4xl text-gray-900 mb-2">Gallery &amp; Portfolio</h2>
          <p class="text-gray-500">Manage your luxury portfolio imagery and categories.</p>
        </div>
        <div class="flex space-x-3">
          <div class="flex bg-white rounded-lg p-1 border border-gray-200">
            <button 
              (click)="viewMode.set('grid')"
              class="p-2 rounded transition-colors"
              [class]="viewMode() === 'grid' 
                ? 'bg-gray-100 text-primary' 
                : 'hover:bg-gray-100 text-gray-400'">
              <span class="material-symbols-outlined">grid_view</span>
            </button>
            <button 
              (click)="viewMode.set('list')"
              class="p-2 rounded transition-colors"
              [class]="viewMode() === 'list' 
                ? 'bg-gray-100 text-primary' 
                : 'hover:bg-gray-100 text-gray-400'">
              <span class="material-symbols-outlined">list</span>
            </button>
          </div>
          <button (click)="openAddModal()" class="flex items-center px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg shadow-gold hover:shadow-gold-lg transition-all font-medium">
            <span class="material-symbols-outlined mr-2">add_photo_alternate</span>
            Upload New Image
          </button>
        </div>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap items-center gap-6 mb-8 border-b border-gray-200 pb-1">
        @for(filter of filters; track filter) {
          <button 
            (click)="activeFilter.set(filter)"
            class="pb-3 border-b-2 font-medium text-sm transition-colors"
            [class]="activeFilter() === filter 
              ? 'border-primary text-primary' 
              : 'border-transparent text-gray-500 hover:text-gray-700'"
          >
            {{ filter === 'All' ? 'All Images' : filter }}
          </button>
        }
      </div>

      <!-- Drag & Drop Area -->
      <div 
        (dragover)="onDragOver($event)" 
        (dragleave)="onDragLeave($event)" 
        (drop)="onDrop($event)"
        class="mb-10 p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-white flex flex-col items-center justify-center text-center cursor-pointer transition-all group"
        [class]="isDragging() 
          ? 'border-primary bg-primary/10 scale-105' 
          : 'hover:border-primary hover:bg-primary/5'"
      >
        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
        </div>
        <h3 class="font-serif text-lg text-gray-800 mb-1">Drag and drop files here</h3>
        <p class="text-sm text-gray-500">Supported formats: JPG, PNG, WEBP (Max 5MB)</p>
      </div>

      @if (viewMode() === 'grid') {
        <!-- Image Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-page-enter">
          @for(image of filteredImages(); track image.id; let i = $index) {
            <div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal-item" [style.animation-delay.ms]="i * 75">
              <div (click)="openImageModal(image.url)" class="relative aspect-[4/5] overflow-hidden cursor-pointer">
                <img [ngSrc]="image.url" [alt]="image.alt" fill class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div class="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {{ image.category }}
                </div>
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="material-symbols-outlined text-white text-4xl p-4 bg-white/10 rounded-full backdrop-blur-sm">zoom_in</span>
                </div>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 class="font-serif text-lg text-gray-900 mb-1">{{ image.title }}</h3>
                  <p class="text-xs text-gray-400 font-mono truncate">{{ image.filename }}</p>
                </div>
                <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full" [class]="image.status === 'published' ? 'bg-green-500' : 'bg-yellow-500'" [title]="image.status"></span>
                    <span class="text-xs text-gray-500">{{ image.date }}</span>
                  </div>
                  <button (click)="openModal(image)" class="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-primary transition-all opacity-0 group-hover:opacity-100 duration-300" aria-label="Edit image details">
                    <span class="material-symbols-outlined !text-base">edit</span>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      } @else {
        <!-- List View -->
        <div class="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100 animate-page-enter">
          <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-100">
                  <thead class="bg-gray-50">
                      <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Info</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Actions</span>
                          </th>
                      </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-100">
                      @for(image of filteredImages(); track image.id; let i = $index) {
                          <tr class="hover:bg-gray-50/50 transition-colors duration-200 reveal-item" [style.animation-delay.ms]="i * 50">
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <img [ngSrc]="image.url" [alt]="image.alt" width="64" height="64" class="w-16 h-16 object-cover rounded-lg shadow-sm"/>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="text-sm font-medium text-gray-900">{{ image.title }}</div>
                                  <div class="text-xs text-gray-500 font-mono">{{ image.filename }}</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                      {{ image.category }}
                                  </span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {{ image.date }}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                      [class]="image.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                                      {{ image.status }}
                                  </span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                  <button (click)="openModal(image)" class="text-primary hover:text-primary-hover transition-colors">Edit</button>
                                  <button (click)="deleteImage(image.id)" class="text-red-500 hover:text-red-700 transition-colors">Delete</button>
                              </td>
                          </tr>
                      }
                  </tbody>
              </table>
          </div>
        </div>
      }
    </div>
    
    <!-- Edit Modal -->
    @if (isModalOpen()) {
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-page-enter">
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-slide-up">
          <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 class="font-display text-xl text-gray-900">{{ currentImage.id === 0 ? 'Upload New Image' : 'Edit Image Details' }}</h3>
            <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <!-- Image Uploader -->
            <div class="space-y-2 mb-6 md:mb-0">
              <label class="block text-sm font-medium text-gray-700">Image Preview</label>
              <div (click)="fileInput.click()" class="aspect-[4/3] w-full rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center relative group cursor-pointer hover:border-primary transition-colors bg-gray-50">
                  @if (currentImage.url) {
                      <img [src]="currentImage.url" alt="Image preview" class="w-full h-full object-cover rounded-lg absolute inset-0">
                      <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <div class="text-center text-white">
                          <span class="material-symbols-outlined text-3xl">edit</span>
                          <p class="text-xs mt-1 font-semibold">Change Image</p>
                        </div>
                      </div>
                  } @else {
                      <div class="text-center text-gray-500">
                          <span class="material-symbols-outlined text-4xl">add_photo_alternate</span>
                          <p class="text-xs mt-2 font-semibold">Click to upload</p>
                      </div>
                  }
              </div>
              <input #fileInput type="file" class="hidden" (change)="onFileSelected($event)" accept="image/png, image/jpeg, image/webp">
            </div>
            
            <!-- Form Fields -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input [(ngModel)]="currentImage.title" class="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm" type="text"/>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select [(ngModel)]="currentImage.category" class="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm">
                  @for(cat of filters; track cat) {
                    @if(cat !== 'All') {
                      <option [value]="cat">{{cat}}</option>
                    }
                  }
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                <input [(ngModel)]="currentImage.alt" class="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm" type="text"/>
              </div>
            </div>
          </div>
          <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
            <button (click)="closeModal()" class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors">Cancel</button>
            <button 
              (click)="saveImage()" 
              class="px-4 py-2 bg-primary text-black hover:bg-primary-hover rounded-lg text-sm font-medium transition-colors shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
              [disabled]="currentImage.id === 0 && !currentImage.url"
            >
              {{ currentImage.id === 0 ? 'Upload Image' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Image Modal -->
    @if (selectedImage()) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in" (click)="closeImageModal()"></div>
          
          <!-- Close Button -->
          <button (click)="closeImageModal()" class="fixed top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full cursor-pointer">
              <span class="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <!-- Modal Content -->
          <div class="relative z-[105] w-full h-full p-4 md:p-12 flex flex-col items-center justify-center pointer-events-none">
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
                      alt="Gallery image full screen view" 
                      class="max-w-full max-h-[85vh] object-contain shadow-2xl transition-all duration-700 ease-out"
                      [class.opacity-0]="isImageLoading()"
                      [class.scale-95]="isImageLoading()"
                      [class.opacity-100]="!isImageLoading()"
                      [class.scale-100]="!isImageLoading()"
                 >
              </div>
              
              <p class="text-white/40 text-xs mt-6 font-medium tracking-[0.3em] uppercase animate-fade-in text-center">Mavluda Beauty • Portfolio</p>
          </div>
      </div>
    }
  `
})
export class GalleryComponent {
  isDragging = signal(false);
  isModalOpen = signal(false);
  viewMode = signal<'grid' | 'list'>('grid');
  selectedImage = signal<string | null>(null);
  isImageLoading = signal(false);
  
  images = signal<GalleryImage[]>([
    { id: 1, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ur5-ti_mA9kxtMS7fly6QkCTl8teUtJXWEQYP4kJCdwk74MdKAC0xJUFZlzkm_fXCtEqPmEw8yb5XDjo6CTqrEydTP7KT3oaUie94cqvHjAF9uPXBic8rATeT5-x4ELENLQtMMYYSmyDRBZbtHcA5u2FhAhKa20_HAMf17ZKJRb2YNs0nW0Ts2kITj0Je2ZI3gbzJp3dm68FxcsqvisR5GdcpWvM0rE57Vpml4AZAAIDTOC47g1Wrl0BWnLJziQdsmyqWk1bHfEr', title: 'Laser Procedure #04', filename: 'IMG_2824_18_24.jpg', category: 'Medical Spa', date: 'Oct 24, 2024', status: 'published', alt: 'Laser skin treatment on an arm' },
    { id: 2, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_FSCEXTwDUjw2fqXkAUxNdH9pYD6fSmD73WcCe2YkK2wkmUzMoEIOkKNwUzWojkynkNxEDvXZZcadWxSFpYPmjb9BtZthWO3-08_fPlQkNYjJ2vg-lbSACzM6kxpf4j6GIpjygqrUnsEd-P_qmFxluE17OGn_XWtd5o0Ia2_kcxO7TTbbBlq6-LF0W2lLse2g6EZ4UV4DWAR9I9-M5ckmf7qAgE_9ICVETZbWeRWjIOWczOt8bjwnQsuc9s9Q3-Gys20VjKFFjG9H', title: 'Bridal Makeup Look', filename: 'client_sarah_j.jpg', category: 'Visage', date: 'Oct 23, 2024', status: 'published', alt: 'Bridal makeup final look' },
    { id: 3, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWIjfWQAgscnPoJaVbw0XZY6ScoA0kpffLGOz0Sr3xQOJNnTvGx_6sSV1INBmqa3N7TolB3IS4NYYE1Hgs0TUkzUvRdmjJiV9jeJyVr3HmjPvczWS1GIaR6_cH6GHlb4HiNGFqGGVDLy-riGixRIkfo4SW-FqZfR1ZhfMfrrWgCGgnfqQcsV4Nsaa1ZgplqyCP9U84eHL6MfQdoZvIx0Hoake3U_j6pnIrFLBacxdod0mLRqudkdRpsFPzvh5BSLv_Gfw0lJBLb6ef', title: 'Royal Cathedral Veil', filename: 'veil_prod_004.png', category: 'Bridal Veils', date: 'Oct 20, 2024', status: 'published', alt: 'Woman wearing a long cathedral veil' },
    { id: 4, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEhu1rJ72g96mDeDEznGN7c6494jnpnqVkyiqHZ2XSxGBpym77t9IAyCqMdfOxrRedwlkE5sHANhB4BTAPdC5fJGJ_YY8xj2Goxl5k-39N7iX3agCbQHcHkKHzRjhDUAPs221VhsvQdecjRc-n3GGjgCF_eH2S_g3tBZaI92_DfxL43we9_bfXjViZ_ttGlEi4fua2W9EcFrDML04T6yEdh_e7yQ5xCDn5KIGvW-6dIHRIVNWDwSKL56pG8UJ_blAYbkmyMg-Kyjx7', title: 'Reception Area', filename: 'salon_interior_main.jpg', category: 'Interior', date: 'Oct 18, 2024', status: 'draft', alt: 'Luxury salon reception area' },
    { id: 5, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA34UJi3keNcjxX9IypFXEkRInfvO-8Y3R32_bPX2SoOnGWMc4lb3Drd2ur-qf_GvC8FDfjq9NJIYKXmM2K8UGa3QCkfh-VwG6QVNomcT62kpPMVacbEhEauX2Xr9rZRWZGS26mUgh0wOdZzC8t7-_ESyVc6rAjVN2_q5sonn6JrULiuLGsQDck71tC2IZO69uZIQMhTJFjWT_bbjk4DR8Wxuh3gSTIunAjZJdChpkHCrj5ZM7AINcf-ges7XBFveVRrd2-v6Q0vegh', title: 'Luxury Gold Facial', filename: 'gold_facial_promo.png', category: 'Medical Spa', date: 'Sep 30, 2024', status: 'published', alt: 'Woman receiving a gold facial treatment' },
    { id: 6, url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMx6SdM_64oXvoNDsVdLCB-e8dRvjd3CAjirPTZOi82NVec9Sw9O1GeebZvNJsi_8VCOHrKVBeTAavGvZ1b4s0gJnfEUfmlYhbc4TOwUrRCTkhY99qJiVbKtLzSigOnX83wTCJO2D8glb_NDk3LvM3lN0uNUtKttfDIUF5SAc-gp5449-xSQ7-WF5gn-Z4vXPyNO6QUxjt4QTe9g_-uFiVIEUGVx27ITfbuIQTvT95VIxWL88TEWZP18Oq6Tt6WqgzjqB6FD8FySJo', title: 'New Cream Line', filename: 'products_batch_01.jpg', category: 'Product', date: 'Sep 28, 2024', status: 'published', alt: 'Display of luxury cosmetic creams' },
  ]);

  filters: ImageCategory[] = ['All', 'Visage', 'Medical Spa', 'Bridal Veils', 'Interior', 'Product'];
  activeFilter = signal<ImageCategory>('All');
  
  filteredImages = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.images();
    }
    return this.images().filter(img => img.category === filter);
  });

  currentImage!: GalleryImage;

  getEmptyImage(): GalleryImage {
    return {
      id: 0,
      url: '',
      title: '',
      filename: '',
      category: 'Visage', // Default
      date: '', // Will be set on save
      status: 'draft',
      alt: ''
    };
  }

  openAddModal() {
    this.currentImage = this.getEmptyImage();
    this.isModalOpen.set(true);
  }

  openModal(image: GalleryImage) {
    this.currentImage = { ...image }; // Create a copy for editing
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  saveImage() {
    if (this.currentImage.id === 0) { // New image
      const newId = this.images().length > 0 ? Math.max(...this.images().map(i => i.id)) + 1 : 1;
      const today = new Date();
      const newImage: GalleryImage = {
        ...this.currentImage,
        id: newId,
        date: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'draft',
      };
      if (!newImage.filename) {
        newImage.filename = `new_image_${newId}.jpg`;
      }
      this.images.update(imgs => [newImage, ...imgs]);
    } else { // Update existing
      this.images.update(imgs => 
        imgs.map(img => img.id === this.currentImage.id ? this.currentImage : img)
      );
    }
    this.closeModal();
  }
  
  deleteImage(id: number) {
    this.images.update(imgs => imgs.filter(img => img.id !== id));
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

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (this.currentImage.id === 0) {
            this.currentImage.filename = file.name;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.currentImage.url = e.target.result;
        };
        reader.readAsDataURL(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      console.log(`${files.length} files dropped`);
      // Here you would handle the file upload logic
    }
  }
}
