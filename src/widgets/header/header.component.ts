
import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../../features/language-selection/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 shadow-sm">
      
      <!-- Search Bar & Mobile Menu -->
      <div class="flex-1 max-w-lg flex items-center gap-3">
        <!-- Mobile Menu Trigger -->
        <button (click)="menuToggled.emit()" class="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50">
          <span class="sr-only">Open menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <!-- Search Input -->
        <div class="relative group flex-1">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </span>
          <input 
            type="text" 
            class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 text-gray-900 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gold focus:border-gold sm:text-sm transition-all duration-200" 
            placeholder="Search..."
          >
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center space-x-3 md:space-x-6">
        
        <!-- Notifications -->
        <button class="p-2.5 rounded-full text-gray-400 hover:text-gold hover:bg-gold-50 transition-all duration-200 relative group">
          <span class="absolute top-2.5 right-2.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white group-hover:animate-pulse"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>

        <!-- Divider -->
        <div class="h-8 w-px bg-gray-100 hidden md:block"></div>

        <!-- Language Switcher -->
        <app-language-switcher></app-language-switcher>

      </div>
    </header>
  `
})
export class HeaderComponent {
  menuToggled = output<void>();
}
