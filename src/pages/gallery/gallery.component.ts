
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
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
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
