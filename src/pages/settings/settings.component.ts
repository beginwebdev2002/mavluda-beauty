
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
  template: `
    <div class="p-4 sm:p-8 max-w-6xl mx-auto animate-page-enter pb-20">
      <!-- Page Header -->
      <div class="mb-8">
          <h1 class="font-serif text-4xl text-gray-900 mb-2">Management of 'About' & Core Info</h1>
          <p class="text-gray-500 text-lg">Configure public-facing business profile and social matrices.</p>
      </div>

      <!-- Tab Navigation -->
      <div class="flex space-x-8 mb-8 border-b border-gray-200 overflow-x-auto">
        @for(tab of tabs; track tab) {
            <button 
                (click)="activeTab.set(tab)"
                class="pb-4 border-b-2 text-sm whitespace-nowrap transition-colors"
                [class]="activeTab() === tab 
                    ? 'border-primary text-primary font-semibold' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 font-medium'">
                {{ tab }}
            </button>
        }
      </div>

      <!-- Content Sections -->
      <div class="space-y-10">
        
        <!-- Business Profile Section -->
        @if (activeTab() === 'Business Profile') {
          <section class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden animate-page-enter">
              <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <div class="flex items-center">
                      <span class="material-symbols-outlined text-primary mr-3">business_center</span>
                      <h4 class="font-serif text-xl font-semibold text-gray-900">Business Profile</h4>
                  </div>
                  <button class="flex items-center px-4 py-2 bg-primary hover:bg-primary-hover text-black rounded-lg text-sm font-medium transition-all shadow-md">
                      Save Changes
                  </button>
              </div>
              <div class="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="space-y-6">
                      <div>
                          <label class="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Phone Number</label>
                          <div class="relative">
                              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">call</span>
                              <input class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900" type="text" value="+998 90 123 45 67"/>
                          </div>
                      </div>
                      <div>
                          <label class="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Official Address</label>
                          <div class="relative">
                              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">location_on</span>
                              <input class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900" type="text" value="123 Luxury Avenue, Tashkent, Uzbekistan"/>
                          </div>
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                          <div>
                              <label class="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider text-xs">Latitude</label>
                              <input class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-mono text-gray-900" type="text" value="41.311081"/>
                          </div>
                          <div>
                              <label class="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider text-xs">Longitude</label>
                              <input class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-mono text-gray-900" type="text" value="69.240562"/>
                          </div>
                      </div>
                  </div>
                  <div>
                      <label class="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Map Preview</label>
                      <div class="h-[235px] w-full rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative group">
                          <img alt="Map Preview" class="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDonmZQfuLMnod8C7wis0atCzWNP6hXp4m4AoTUkoIuPmARE_RPVbF8IOpf0C5vL9JCeOUxLeEbrkKIbexjZNjWi7N0mOGT4vh5gfIwVQ6W6t_y1RrbJ8mQdVkZDKa3iIPYPOCAcNuCyqCDj1BJlO-SzpspJY1_K_8iJC8huctLGH8gw04zghpbK-aLIeK0eF2OdSo5Cyx8uG_rZsuVHV606R48a5A23KKY9m5fok_i6f00f_floYzSSA3W0cuUMIGxWr-KW4RYNyfh"/>
                          <div class="absolute inset-0 flex items-center justify-center">
                              <div class="bg-white/90 p-4 rounded-xl shadow-lg flex items-center space-x-3 backdrop-blur-sm border border-primary/20">
                                  <span class="material-symbols-outlined text-primary text-3xl">map</span>
                                  <span class="text-xs font-medium uppercase tracking-widest text-gray-600">Interactive Map Component</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        }

        <!-- Social Matrix Section -->
        @if (activeTab() === 'Social Matrix') {
          <section class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden animate-page-enter">
              <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <div class="flex items-center">
                      <span class="material-symbols-outlined text-primary mr-3">share</span>
                      <h4 class="font-serif text-xl font-semibold text-gray-900">Social Matrix</h4>
                  </div>
                  <div class="flex space-x-3">
                      <button (click)="addSocialPlatform()" class="flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
                          <span class="material-symbols-outlined text-sm mr-2">add</span> Add Platform
                      </button>
                      <button class="flex items-center px-4 py-2 bg-primary hover:bg-primary-hover text-black rounded-lg text-sm font-medium transition-all shadow-md">
                          Save Changes
                      </button>
                  </div>
              </div>
              <div class="p-8">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      @for(platform of socialPlatforms(); track platform.id){
                        <div class="p-5 border border-gray-100 rounded-2xl bg-gray-50 group hover:border-primary/30 transition-all">
                            <div class="flex justify-between items-start mb-4">
                                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                                    <img [alt]="platform.alt" class="w-6 h-6" [src]="platform.iconUrl"/>
                                </div>
                                <button (click)="removeSocialPlatform(platform.id)" class="text-gray-400 hover:text-red-500 transition-colors">
                                    <span class="material-symbols-outlined text-lg">delete</span>
                                </button>
                            </div>
                            <div class="space-y-3">
                                <input class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold uppercase tracking-wider text-gray-900" type="text" [value]="platform.name"/>
                                <input class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-primary underline" type="text" [value]="platform.url"/>
                            </div>
                        </div>
                      }
                  </div>
              </div>
          </section>
        }

        <!-- General Info Section -->
        @if (activeTab() === 'General Info') {
          <section class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden animate-page-enter">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div class="flex items-center">
                <span class="material-symbols-outlined text-primary mr-3">auto_awesome</span>
                <h4 class="font-serif text-xl font-semibold text-gray-900">General Info & Philosophy</h4>
              </div>
              <button class="flex items-center px-4 py-2 bg-primary hover:bg-primary-hover text-black rounded-lg text-sm font-medium transition-all shadow-md">
                Save Changes
              </button>
            </div>
            <div class="p-8 space-y-8">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Center Biography (Multi-language)</label>
                <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-inner">
                  <div class="bg-gray-50 p-2 flex border-b border-gray-200">
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">format_bold</span></button>
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">format_italic</span></button>
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">format_underlined</span></button>
                    <div class="w-px h-6 bg-gray-200 mx-2"></div>
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">format_list_bulleted</span></button>
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">link</span></button>
                  </div>
                  <textarea class="w-full p-6 bg-white border-none focus:ring-0 text-sm leading-relaxed text-gray-900" placeholder="Write the biography..." rows="6">Mavluda Azizova Beauty Ecosystem is a premier destination for holistic beauty and medical aesthetics. Founded on the principles of luxury, precision, and personalized care, our center offers a transformative experience. With over 15 years of excellence, we specialize in high-end visage artistry and advanced medical spa procedures.</textarea>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Beauty Philosophy</label>
                <div class="border border-gray-200 rounded-2xl overflow-hidden shadow-inner">
                  <div class="bg-gray-50 p-2 flex border-b border-gray-200">
                    <button class="p-1.5 hover:bg-gray-100 rounded transition-colors text-gray-600"><span class="material-symbols-outlined text-sm">format_quote</span></button>
                  </div>
                  <textarea class="w-full p-6 bg-white border-none focus:ring-0 text-sm italic font-serif leading-relaxed text-gray-900" placeholder="Enter your philosophy..." rows="4">"True beauty is an ecosystem where health, confidence, and aesthetics exist in perfect harmony. We don't just enhance features; we cultivate the inner radiace of every individual who walks through our doors."</textarea>
                </div>
              </div>
            </div>
          </section>
        }

        <!-- Additional Links Section -->
        @if (activeTab() === 'Additional Links') {
          <section class="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden animate-page-enter">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div class="flex items-center">
                <span class="material-symbols-outlined text-primary mr-3">link</span>
                <h4 class="font-serif text-xl font-semibold text-gray-900">Additional Links</h4>
              </div>
              <button (click)="addLink()" class="flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
                <span class="material-symbols-outlined text-sm mr-2">add</span> Add New Link
              </button>
            </div>
            <div class="p-8">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="text-left text-xs font-semibold uppercase tracking-widest text-gray-400 border-b border-gray-100">
                      <th class="pb-4 px-4">Label</th>
                      <th class="pb-4 px-4">Target URL</th>
                      <th class="pb-4 px-4">Category</th>
                      <th class="pb-4 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-50">
                    @for(link of additionalLinks(); track link.id){
                      <tr class="group hover:bg-gray-50 transition-colors">
                        <td class="py-4 px-4">
                          <input class="bg-transparent border-none focus:ring-0 text-sm font-medium p-0 text-gray-900" type="text" [value]="link.label"/>
                        </td>
                        <td class="py-4 px-4 text-sm text-primary underline truncate max-w-xs">
                          {{link.targetUrl}}
                        </td>
                        <td class="py-4 px-4">
                          <span class="px-2 py-1 text-[10px] font-bold uppercase rounded tracking-wider" [class]="link.categoryColor === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'">
                            {{link.category}}
                          </span>
                        </td>
                        <td class="py-4 px-4 text-right">
                          <button (click)="removeLink(link.id)" class="text-gray-400 hover:text-red-500 transition-colors">
                            <span class="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        }

      </div>
       <!-- Final Actions -->
      <div class="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p class="text-sm text-gray-500 font-medium">Last updated: <span class="text-gray-900">Oct 26, 2024 - 14:32</span></p>
          <div class="flex space-x-4">
              <button class="px-6 py-2.5 text-gray-500 hover:text-gray-800 font-medium transition-colors">Discard All</button>
              <button class="px-8 py-2.5 bg-primary hover:bg-primary-hover text-black rounded-xl shadow-gold hover:shadow-lg transition-all font-semibold tracking-wide">Publish Changes</button>
          </div>
      </div>
    </div>
  `
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
        iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAh_4_s1A2wU4k2pXsv2gAFpqfGSL2P9yA6_LC9Sl_3_k39n-u-f_WjI-QO2J_o73A1I5k8gGf6f_h_Y2P-N3g-T_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4_w_o-g_k-Z_4', // Placeholder icon
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
