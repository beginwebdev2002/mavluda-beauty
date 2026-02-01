import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';
import { filter } from 'rxjs';
import { inject } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
  exact: boolean;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="h-full bg-sidebar-dark text-white flex flex-col w-64 border-r border-[#1F1F1F] shadow-2xl relative z-20">
      
      <!-- Brand Header -->
      <div class="h-20 flex items-center px-6 border-b border-[#1F1F1F]">
         <div class="flex items-center gap-3">
          <!-- Icon -->
          <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-xl">
             <span>M</span>
          </div>
           <!-- Text -->
           <div class="flex flex-col">
             <h2 class="font-display text-lg font-bold text-white leading-tight tracking-wide">Mavluda</h2>
             <p class="text-[10px] uppercase text-primary tracking-widest font-medium mt-0.5">Admin Console</p>
           </div>
         </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-8 px-4 space-y-2">
        @for (item of menuItems(); track item.label) {
          <a 
            [routerLink]="item.route"
            routerLinkActive="bg-sidebar-active text-white border-primary shadow-glow"
            [routerLinkActiveOptions]="{exact: item.exact}"
            class="group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 border-l-4 border-transparent text-text-muted-dark hover:bg-sidebar-active hover:text-white"
          >
            <span 
              [innerHTML]="item.icon | safeHtml"
              class="mr-3 text-xl transition-colors group-hover:text-primary"
              [class.text-primary]="isActive(item.route, item.exact)"
              [class.text-text-muted-dark]="!isActive(item.route, item.exact)"
              >
            </span>
            <span class="tracking-wide">{{ item.label }}</span>
          </a>
        }
      </nav>

      <!-- User Profile (Bottom) -->
      <div class="p-4 border-t border-gray-800">
        <div class="flex items-center px-2 py-2 hover:bg-sidebar-active rounded-lg transition-colors cursor-pointer">
          <div class="relative">
             <img class="w-10 h-10 rounded-full object-cover border border-gray-600" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyPfY6aoO_pet0H3-Q7WlPTL0KsOFl31s_TD21ujHeq495bCH1erOCHAw7AnWtL9i70gf6gYTro4pCUQfDZRzxeVaig2jeIGz_FaK7NdbFaJaH4Mo141wcyWCVjI4nllnBIss796eaeGYiz3v95Jg_BEtL4X95x2vWPP6eqNBFcLEUdCHNLy_Yi_fb9qWDeF1Xgownfk9OmmLa2UVU5WTdbyXPSS6FJsC2HCHpDiaJ5O70cKqyw-Cs-Bgyhj5HWAEjcE25tm4IzY4o" alt="Admin User">
             <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-sidebar-dark rounded-full"></span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-white">Mavluda A.</p>
            <p class="text-xs text-gray-500">Super Admin</p>
          </div>
          <span class="material-symbols-outlined ml-auto text-gray-500 text-lg">logout</span>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  // Fix: Add explicit type `Router` to injected router to resolve type inference issue.
  private router: Router = inject(Router);
  currentUrl = signal('/');

  menuItems = signal<MenuItem[]>([
    { 
      label: 'Dashboard', 
      route: '/admin/dashboard', 
      exact: true,
      icon: '<span class="material-symbols-outlined">grid_view</span>'
    },
    { 
      label: 'Veil', 
      route: '/admin/veil', 
      exact: false,
      icon: '<span class="material-symbols-outlined">checkroom</span>' 
    },
    { 
      label: 'Services', 
      route: '/admin/services', 
      exact: false,
      icon: '<span class="material-symbols-outlined">spa</span>'
    },
    { 
      label: 'Clients', 
      route: '/admin/clients', 
      exact: false,
      icon: '<span class="material-symbols-outlined">group</span>'
    },
    {
      label: 'Gallery',
      route: '/admin/gallery',
      exact: false,
      icon: '<span class="material-symbols-outlined">collections</span>'
    },
    {
      label: 'Settings',
      route: '/admin/settings',
      exact: false,
      icon: '<span class="material-symbols-outlined">settings</span>'
    }
  ]);

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    });
  }

  isActive(route: string, exact: boolean): boolean {
    return exact 
      ? this.currentUrl() === route 
      : this.currentUrl().startsWith(route);
  }
}
