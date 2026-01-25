
import { Component, signal, input, computed, ChangeDetectionStrategy } from '@angular/core';
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
        class="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 border border-transparent focus:outline-none"
        [class]="buttonThemeClasses()"
      >
        <span class="text-xl leading-none">{{ currentLang().flag }}</span>
        <span class="text-sm font-medium tracking-wide">{{ currentLang().label }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform duration-200" 
          [class]="iconThemeClasses()"
          [class.rotate-180]="isOpen()"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      @if (isOpen()) {
        <div class="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          @for (lang of languages; track lang.code) {
            @if (lang.code !== currentLang().code) {
              <button 
                (click)="selectLanguage(lang)"
                class="w-full flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-gold-50 hover:text-gold-dark transition-colors text-left group text-gray-600"
              >
                <span class="text-xl filter group-hover:brightness-110">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </button>
            }
          }
        </div>
      }
    </div>
  `
})
export class LanguageSwitcherComponent {
  variant = input<'light' | 'dark'>('light');
  isOpen = signal(false);
  
  languages: Language[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tj', label: 'Тоҷикӣ', flag: '🇹🇯' }
  ];

  currentLang = signal<Language>(this.languages[0]);

  // Computed classes to avoid JIT parser errors with '/' characters in template bindings
  buttonThemeClasses = computed(() => {
    return this.variant() === 'light'
      ? 'hover:bg-gray-100 hover:border-gray-200 text-gray-700'
      : 'hover:bg-white/10 hover:border-white/20 text-white';
  });

  iconThemeClasses = computed(() => {
    return this.variant() === 'light'
      ? 'text-gray-400'
      : 'text-white/70';
  });

  toggleDropdown() {
    this.isOpen.update(v => !v);
  }

  selectLanguage(lang: Language) {
    this.currentLang.set(lang);
    this.isOpen.set(false);
  }
}
