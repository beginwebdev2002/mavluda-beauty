
import { Component, signal, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  label: string;
  flagCode: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  variant = input<'light' | 'dark'>('light');
  isOpen = signal(false);
  
  languages: Language[] = [
    { code: 'ru', label: 'Русский', flagCode: 'ru' },
    { code: 'en', label: 'English', flagCode: 'us' },
    { code: 'tj', label: 'Тоҷикӣ', flagCode: 'tj' }
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
