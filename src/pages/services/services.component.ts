
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceItem {
  id: number;
  name: string;
  category: string;
  price: number;
  duration: string;
  active: boolean;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6 relative animate-page-enter max-w-[1200px] mx-auto p-4 md:p-6 lg:p-0 lg:py-6">
      <!-- Header and Add Button -->
      <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <h2 class="text-3xl font-serif text-gray-900">Services & Treatments</h2>
          <p class="text-gray-500 mt-2">Manage your luxury treatment offerings.</p>
        </div>
        <button 
          (click)="openAddModal()"
          class="px-5 py-2.5 bg-primary text-black rounded-lg shadow-gold hover:shadow-gold-lg hover:bg-primary-hover transition-all duration-300 flex items-center justify-center space-x-2 group btn-primary-shimmer active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
          <span class="font-medium">Add Service</span>
        </button>
      </div>

      <!-- Controls -->
      <div class="flex flex-col sm:flex-row justify-between items-end sm:items-center pb-2 border-b border-gray-100 gap-4">
        <!-- Filters -->
        <div class="flex space-x-6 overflow-x-auto no-scrollbar w-full sm:w-auto">
          @for (filter of filters; track filter) {
            <button
              (click)="setFilter(filter)"
              class="text-sm font-medium pb-3 transition-all duration-300 whitespace-nowrap relative"
              [class]="activeFilter() === filter
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gold'"
            >
              {{ filter === 'All' ? 'All Services' : filter }}
              @if (activeFilter() === filter) {
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gold animate-fade-in"></span>
              }
            </button>
          }
        </div>

        <!-- View Mode Switcher -->
        <div class="flex bg-gray-100 p-1 rounded-lg shrink-0">
          <button 
            (click)="viewMode.set('list')" 
            [class]="viewMode() === 'list' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'" 
            class="p-2 rounded-md transition-all duration-200"
            title="List View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
          </button>
          <button 
            (click)="viewMode.set('card')" 
            [class]="viewMode() === 'card' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'" 
            class="p-2 rounded-md transition-all duration-200"
            title="Card View"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
        </div>
      </div>

      <!-- Views -->
      @if (viewMode() === 'list') {
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-page-enter">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-100">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Name</th>
                  <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Duration</th>
                  <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" class="relative px-6 py-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100">
                @for (service of filteredServices(); track service.id; let i = $index) {
                  <tr class="hover:bg-gold-50/30 transition-colors duration-200 reveal-item" [style.animation-delay.ms]="i * 50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ service.name }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {{ service.category }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ service.duration }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-serif font-medium text-gray-900">
                      {{ service.price }} TJS
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        [class]="service.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                        {{ service.active ? 'Active' : 'Inactive' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button (click)="openEditModal(service)" class="text-gold hover:text-gold-dark transition-colors font-medium">Edit</button>
                    </td>
                  </tr>
                }
                @if (filteredServices().length === 0) {
                   <tr>
                    <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                      <p class="mb-2">No services found.</p>
                      <button (click)="openAddModal()" class="text-gold hover:underline text-sm">Add a new service</button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      } @else {
        <!-- Card View -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-page-enter">
           @for (service of filteredServices(); track service.id; let i = $index) {
             <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-gold hover:border-gold/30 transition-all duration-300 group flex flex-col h-full reveal-item" [style.animation-delay.ms]="i * 100">
                
                <div class="flex justify-between items-start mb-4">
                   <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                      {{ service.category }}
                   </span>
                   
                   <span class="relative flex h-2.5 w-2.5">
                      @if (service.active) {
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      } @else {
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                      }
                   </span>
                </div>

                <div class="flex-1">
                   <h3 class="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">{{ service.name }}</h3>
                   
                   <div class="flex flex-col space-y-2 mt-4">
                      <div class="flex items-center text-sm text-gray-500">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-gold"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                         {{ service.duration }}
                      </div>
                      <div class="flex items-center text-sm text-gray-500">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-gold"><path d="M20.2 6 3 11l-.9-2.4c-.5-1.1.5-2.2 1.7-1.7l13.2 5.5"/><path d="m3 11 16 9c.6.3 1.3-.3 1.1-.9l-6-13.2"/></svg>
                         <span class="font-medium text-gray-900">{{ service.price }} TJS</span>
                      </div>
                   </div>
                </div>

                <div class="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                   <span class="text-xs font-medium px-2 py-1 rounded" [class]="service.active ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'">
                      {{ service.active ? 'Active' : 'Inactive' }}
                   </span>
                   <button (click)="openEditModal(service)" class="text-sm font-medium text-gold hover:text-gold-dark hover:underline transition-all">
                      Edit Details
                   </button>
                </div>
             </div>
           }
        </div>
      }

      <!-- Edit Modal -->
      @if (isEditModalOpen()) {
        <div class="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in" (click)="closeEditModal()"></div>

          <div class="flex min-h-screen items-center justify-center p-4">
             <div class="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-gold/10 animate-slide-up">
                
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 class="text-xl font-serif font-bold text-gray-900">
                    {{ tempService.id === 0 ? 'Add New Service' : 'Edit Service' }}
                  </h3>
                  <button (click)="closeEditModal()" class="text-gray-400 hover:text-gray-500 transition-colors">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div class="px-6 py-6 space-y-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">Service Name</label>
                    <input type="text" [(ngModel)]="tempService.name" class="block w-full rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gold/50 focus:border-gold sm:text-sm p-2.5 transition-all shadow-sm">
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                      <select [(ngModel)]="tempService.category" class="block w-full rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gold/50 focus:border-gold sm:text-sm p-2.5 transition-all shadow-sm">
                         <option value="Injectables">Injectables</option>
                         <option value="Facials">Facials</option>
                         <option value="Laser">Laser</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1.5">Price (TJS)</label>
                      <input type="number" [(ngModel)]="tempService.price" class="block w-full rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gold/50 focus:border-gold sm:text-sm p-2.5 transition-all shadow-sm">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1.5">Duration</label>
                      <input type="text" [(ngModel)]="tempService.duration" class="block w-full rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-gold/50 focus:border-gold sm:text-sm p-2.5 transition-all shadow-sm">
                    </div>

                    <div>
                       <label class="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                       <button (click)="toggleTempActive()" type="button" 
                         [class]="tempService.active ? 'bg-green-50 text-green-700 border-green-200 ring-green-500/20' : 'bg-red-50 text-red-700 border-red-200 ring-red-500/20'" 
                         class="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all border hover:opacity-90">
                            {{ tempService.active ? 'Active' : 'Inactive' }}
                       </button>
                    </div>
                  </div>
                </div>

                <div class="bg-gray-50 px-6 py-4 flex flex-row-reverse border-t border-gray-100 gap-3">
                  <button (click)="saveEdit()" type="button" class="inline-flex justify-center rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/50 transition-all transform active:scale-95">
                    {{ tempService.id === 0 ? 'Create Service' : 'Save Changes' }}
                  </button>
                  <button (click)="closeEditModal()" type="button" class="inline-flex justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                    Cancel
                  </button>
                </div>
             </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ServicesPageComponent {
  services = signal<ServiceItem[]>([
    { id: 1, name: 'Botox Treatment', category: 'Injectables', price: 350, duration: '30 min', active: true },
    { id: 2, name: 'Luxury Gold Facial', category: 'Facials', price: 180, duration: '60 min', active: true },
    { id: 3, name: 'Laser Hair Removal (Full Body)', category: 'Laser', price: 400, duration: '90 min', active: true },
    { id: 4, name: 'Lip Fillers (Juvederm)', category: 'Injectables', price: 600, duration: '45 min', active: true },
    { id: 5, name: 'Chemical Peel', category: 'Facials', price: 120, duration: '30 min', active: false },
  ]);

  filters = ['All', 'Injectables', 'Facials', 'Laser'];
  activeFilter = signal('All');
  viewMode = signal<'list' | 'card'>('list');
  
  filteredServices = computed(() => {
    const filter = this.activeFilter();
    const all = this.services();
    if (filter === 'All') return all;
    return all.filter(s => s.category === filter);
  });

  isEditModalOpen = signal(false);
  tempService: ServiceItem = { id: 0, name: '', category: 'Injectables', price: 0, duration: '', active: true };

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  openAddModal() {
    this.tempService = { id: 0, name: '', category: 'Injectables', price: 0, duration: '', active: true };
    this.isEditModalOpen.set(true);
  }

  openEditModal(service: ServiceItem) {
    this.tempService = { ...service };
    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
  }

  saveEdit() {
    if (this.tempService.id === 0) {
      const newId = this.services().length > 0 ? Math.max(...this.services().map(s => s.id)) + 1 : 1;
      const newService = { ...this.tempService, id: newId };
      this.services.update(items => [...items, newService]);
    } else {
      this.services.update(items => 
        items.map(item => item.id === this.tempService.id ? { ...this.tempService } : item)
      );
    }
    this.closeEditModal();
  }

  toggleTempActive() {
    this.tempService.active = !this.tempService.active;
  }
}
