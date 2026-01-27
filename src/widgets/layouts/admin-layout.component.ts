
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex h-screen overflow-hidden bg-[#F8F8F8]">
      
      <!-- Mobile Sidebar Overlay -->
      @if (isMobileSidebarOpen()) {
        <div class="fixed inset-0 z-50 flex md:hidden" role="dialog" aria-modal="true">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in" (click)="toggleMobileSidebar()"></div>
          
          <!-- Sidebar Panel -->
          <div class="relative flex flex-col w-72 max-w-xs h-full bg-[#050505] shadow-2xl transform transition-transform animate-fade-in">
             <!-- Sidebar Content -->
             <app-sidebar class="flex-1 h-full"></app-sidebar>
          </div>

          <!-- Close Button Area (Outside sidebar to avoid overlap) -->
          <div class="p-4 animate-fade-in">
             <button (click)="toggleMobileSidebar()" class="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors backdrop-blur-md">
                <span class="sr-only">Close sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>
        </div>
      }

      <!-- Sidebar Widget (Desktop) -->
      <app-sidebar class="hidden md:flex"></app-sidebar>

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <!-- Header Widget with toggle listener -->
        <app-header (menuToggled)="toggleMobileSidebar()"></app-header>

        <!-- Scrollable Content -->
        <main class="flex-1 overflow-y-auto p-4 md:p-8">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class AdminLayoutComponent {
  isMobileSidebarOpen = signal(false);

  toggleMobileSidebar() {
    this.isMobileSidebarOpen.update(v => !v);
  }
}