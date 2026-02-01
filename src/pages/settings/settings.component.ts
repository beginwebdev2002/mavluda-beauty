
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

type SettingsTab = 'Business Profile' | 'Social Matrix' | 'General Info' | 'Additional Links';

interface SocialPlatform {
  id: number;
  name: string;
  url: string;
  iconUrl: string;
  alt: string;
}

interface AdditionalLink {
  id: number;
  label: string;
  targetUrl: string;
  category: string;
  categoryColor: 'blue' | 'green';
}


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    tabs: SettingsTab[] = ['Business Profile', 'Social Matrix', 'General Info', 'Additional Links'];
    activeTab = signal<SettingsTab>('Business Profile');

    socialPlatforms = signal<SocialPlatform[]>([
      { id: 1, name: 'Instagram', url: 'https://instagram.com/mavluda_azizova', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', alt: 'Instagram' },
      { id: 2, name: 'Telegram', url: 'https://t.me/mavluda_beauty', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', alt: 'Telegram' },
      { id: 3, name: 'WhatsApp', url: 'https://wa.me/998901234567', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', alt: 'WhatsApp' },
    ]);

    additionalLinks = signal<AdditionalLink[]>([
      { id: 1, label: 'Press Release 2024', targetUrl: 'https://example.com/press/mavluda-2024', category: 'Press', categoryColor: 'blue' },
      { id: 2, label: 'Medical Certification', targetUrl: 'https://docs.mavluda.uz/certs/iso-9001', category: 'Compliance', categoryColor: 'green' },
    ]);

    addSocialPlatform() {
      const newPlatform: SocialPlatform = {
        id: Date.now(),
        name: 'New Platform',
        url: 'https://',
        iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAh_4_s1A2wU4k2pXsv2gAFpqfGSL2P9yA6_LC9Sl_3_k39n-u-f_WjI-QO2J_o73A1I5k8gGf6f_h_Y2P-N3g-T_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4', // Placeholder icon
        alt: 'New'
      };
      this.socialPlatforms.update(platforms => [...platforms, newPlatform]);
    }

    removeSocialPlatform(id: number) {
      this.socialPlatforms.update(platforms => platforms.filter(p => p.id !== id));
    }

    addLink() {
      const newLink: AdditionalLink = {
        id: Date.now(),
        label: 'New Link',
        targetUrl: 'https://',
        category: 'General',
        categoryColor: 'blue'
      };
      this.additionalLinks.update(links => [...links, newLink]);
    }

    removeLink(id: number) {
      this.additionalLinks.update(links => links.filter(l => l.id !== id));
    }
}
