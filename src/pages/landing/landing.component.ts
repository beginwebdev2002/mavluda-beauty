
import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageService, WeddingImage } from '../../shared/services/image.service';
import { LanguageSwitcherComponent } from '../../features/language-selection/language-switcher.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private imageService = inject(ImageService);
  
  isLoading = signal(true);
  heroImage = signal<WeddingImage | null>(null);
  secondaryImages = signal<WeddingImage[]>([]);
  galleryImages = signal<WeddingImage[]>([]);

  readonly currentYear = new Date().getFullYear();

  ngOnInit() {
    this.loadImages();
  }

  async loadImages() {
    this.isLoading.set(true);
    
    // 1. Fetch images immediately
    const images = await this.imageService.getWeddingImages();

    // 2. Select images immediately to determine which URLs to preload
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    const hero = shuffled[0];
    const secondary = shuffled.slice(1, 4);
    const gallery = shuffled.slice(4, 8);
    const imagesToPreload = [hero, ...secondary].filter(Boolean);

    // 3. Parallel Execution: 
    //    Wait for BOTH the minimum luxury delay (2s) AND the image preloading.
    //    This ensures that when the spinner vanishes, the hero image is ready in the browser cache.
    try {
      await Promise.all([
        new Promise(resolve => setTimeout(resolve, 2000)), // Minimum luxury delay
        this.preloadImages(imagesToPreload)
      ]);
    } catch (err) {
      console.warn('Preloading non-critical error:', err);
      // Continue even if preloading fails (e.g. one image 404s)
    }

    // 4. Update state to reveal content
    this.heroImage.set(hero);
    this.secondaryImages.set(secondary);
    this.galleryImages.set(gallery);
    this.isLoading.set(false);
  }

  // Preloads images by creating Image objects in memory
  private preloadImages(images: WeddingImage[]): Promise<void[]> {
    const promises = images.map(img => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = () => resolve(); // Resolve on error too to avoid blocking the UI
        image.src = img.url; 
      });
    });
    return Promise.all(promises);
  }
}
