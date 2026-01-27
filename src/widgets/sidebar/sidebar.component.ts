
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="h-full bg-[#050505] flex flex-col w-72 border-r border-[#1F1F1F] shadow-2xl relative z-20">
      
      <!-- Brand Header -->
      <div class="h-20 flex items-center px-6 border-b border-[#1F1F1F] bg-[#0A0A0A]">
         <div class="flex items-center gap-3">
          <!-- Icon -->
          <div class="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
              <span class="font-serif text-lg text-primary font-medium">M</span>
          </div>
           <!-- Text -->
           <div class="flex flex-col">
             <h2 class="font-serif text-lg text-white leading-tight">Mavluda Beauty</h2>
             <p class="text-[10px] uppercase text-gold/80 tracking-widest mt-1">Admin Console</p>
           </div>
         </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        @for (item of menuItems; track item.label) {
          <a 
            [routerLink]="item.route"
            routerLinkActive="bg-[#1A1A1A] text-gold border-l-[3px] border-gold shadow-gold-sm"
            [routerLinkActiveOptions]="{exact: false}"
            class="group flex items-center px-4 py-3.5 text-sm font-medium rounded-r-lg transition-all duration-300 border-l-[3px] border-transparent hover:bg-[#121212] hover:text-white"
          >
            <!-- Icon -->
            <span 
              class="mr-4 transition-colors duration-300 group-hover:text-gold group-hover:scale-110 transform" 
              [class.text-gold]="item.isActive" 
              [class.text-gray-500]="!item.isActive" 
              [innerHTML]="item.icon | safeHtml">
            </span>
            
            <span class="tracking-wide">{{ item.label }}</span>

            <!-- Active Indicator Dot (Optional luxury touch) -->
            <span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold">•</span>
          </a>
        }
      </nav>

      <!-- User Profile (Bottom) -->
      <div class="p-6 border-t border-[#1F1F1F] bg-[#0A0A0A]">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="relative">
             <img class="h-10 w-10 rounded-full border border-gray-700 group-hover:border-gold transition-colors" src="https://picsum.photos/100/100" alt="Admin">
             <div class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-[#0A0A0A]"></div>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-white group-hover:text-gold transition-colors">Mavluda A.</p>
            <p class="text-xs text-gray-500">Super Admin</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 group-hover:text-white transition-colors"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  menuItems = [
    { 
      label: 'Dashboard', 
      route: '/admin/dashboard', 
      isActive: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>'
    },
    { 
      label: 'Veil', 
      route: '/admin/veil', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9Z"/><path d="M12 3v18"/></svg>' 
    },
    { 
      label: 'Services', 
      route: '/admin/services', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-2-2"/></svg>' 
    },
    { 
      label: 'Clients', 
      route: '/admin/clients', 
      isActive: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' 
    }
  ];
}
