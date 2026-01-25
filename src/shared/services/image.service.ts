
import { Injectable } from '@angular/core';

export interface WeddingImage {
  url: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // A curated list of high-quality, thematic images for the wedding landing page.
  // Using specific seeds for picsum.photos ensures consistent and beautiful results.
  private weddingImages: WeddingImage[] = [
    { url: 'https://picsum.photos/seed/bride1/1200/1800', alt: 'Elegant bride in a stunning couture wedding dress' },
    { url: 'https://picsum.photos/seed/weddingdetail/800/1200', alt: 'Close-up detail of intricate lace on a wedding gown' },
    { url: 'https://picsum.photos/seed/bride2/1200/1800', alt: 'Joyful bride laughing in a beautiful setting' },
    { url: 'https://picsum.photos/seed/fabric/800/1200', alt: 'Flowing silk and satin fabric of a dress' },
    { url: 'https://picsum.photos/seed/bride3/1200/1800', alt: 'Bride posing editorially in a luxurious location' },
    { url: 'https://picsum.photos/seed/bouquet/800/1200', alt: 'A beautiful and elegant wedding bouquet' },
    { url: 'https://picsum.photos/seed/bride4/1200/1800', alt: 'A bride looking out a window, bathed in soft light' },
    { url: 'https://picsum.photos/seed/rings/800/1200', alt: 'Elegant wedding rings on a silk cushion' },
    { url: 'https://picsum.photos/seed/bride5/1200/1800', alt: 'A silhouette of a bride against a sunset' },
    { url: 'https://picsum.photos/seed/venue/1200/800', alt: 'A luxurious and beautifully decorated wedding venue' },
    { url: 'https://picsum.photos/seed/groom/1200/1800', alt: 'A dapper groom adjusting his tie' },
    { url: 'https://picsum.photos/seed/couple/1200/1800', alt: 'A romantic couple embracing in a scenic location' },
    { url: 'https://picsum.photos/seed/shoes/800/1200', alt: 'Elegant bridal shoes with intricate details' },
    { url: 'https://picsum.photos/seed/bride6/1200/1800', alt: 'A bride with a long, flowing veil' },
  ];

  getWeddingImages(): Promise<WeddingImage[]> {
    // Simulate a network request to fetch images
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.weddingImages);
      }, 500);
    });
  }
}
