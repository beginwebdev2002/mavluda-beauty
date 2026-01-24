
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="h-full bg-dark text-gray-400 flex flex-col w-64 border-r border-dark-border">
      <!-- Logo Area -->
      <div class="h-16 flex items-center px-6 border-b border-white/5">
         <div class="w-8 h-8 bg-gold rounded-full flex items-center justify-center mr-3">
             <span class="text-dark font-serif font-bold text-lg">M</span>
         </div>
         <span class="text-white font-serif font-semibold tracking-wide">Mavluda</span>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        @for (item of menuItems; track item.label) {
          <a 
            [routerLink]="item.route"
            routerLinkActive="bg-white/5 text-gold border-r-2 border-gold"
            [routerLinkActiveOptions]="{exact: false}"
            class="group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            <!-- Icons using SVG directly for reliability -->
            <span class="mr-3 transition-colors duration-200" [class.text-gold]="item.isActive" [class.text-gray-500]="!item.isActive" [innerHTML]="item.icon"></span>
            {{ item.label }}
          </a>
        }
      </nav>

      <!-- User Profile Snippet (Bottom) -->
      <div class="p-4 border-t border-white/5">
        <div class="flex items-center">
          <img class="h-9 w-9 rounded-full border border-gold" src="https://picsum.photos/100/100" alt="Admin">
          <div class="ml-3">
            <p class="text-sm font-medium text-white">Mavluda A.</p>
            <p class="text-xs font-medium text-gray-500 group-hover:text-gray-300">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  menuItems = [
    { 
      label: 'Dashboard', 
      route: '/dashboard', 
      isActive: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>'
    },
    { 
      label: 'Appointments', 
      route: '/appointments',
      isActive: false, 
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>' 
    },
    { 
      label: 'Inventory', 
      route: '/inventory', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-9"/></svg>' 
    },
    { 
      label: 'Services', 
      route: '/services', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-2-2"/></svg>' 
    },
    { 
      label: 'Clients', 
      route: '/clients', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' 
    }
  ];
}
