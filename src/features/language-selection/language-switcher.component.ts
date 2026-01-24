
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <button 
        (click)="toggleDropdown()"
        class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-transparent hover:border-gray-200 focus:outline-none"
      >
        <span class="text-xl">{{ currentLang().flag }}</span>
        <span class="text-sm font-medium text-gray-700 uppercase">{{ currentLang().code }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 w-4 h-4 transition-transform duration-200" [class.rotate-180]="isOpen()">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      @if (isOpen()) {
        <div class="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          @for (lang of languages; track lang.code) {
            <button 
              (click)="selectLanguage(lang)"
              class="w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gold-50 hover:text-gold-dark transition-colors text-left"
              [class.text-gold-dark]="currentLang().code === lang.code"
              [class.font-semibold]="currentLang().code === lang.code"
              [class.text-gray-600]="currentLang().code !== lang.code"
            >
              <span class="text-lg">{{ lang.flag }}</span>
              <span>{{ lang.label }}</span>
            </button>
          }
        </div>
      }
    </div>
  `
})
export class LanguageSwitcherComponent {
  isOpen = signal(false);
  
  languages: Language[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tj', label: 'Тоҷикӣ', flag: '🇹🇯' }
  ];

  currentLang = signal<Language>(this.languages[0]);

  toggleDropdown() {
    this.isOpen.update(v => !v);
  }

  selectLanguage(lang: Language) {
    this.currentLang.set(lang);
    this.isOpen.set(false);
  }
}
