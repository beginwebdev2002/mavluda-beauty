
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex justify-between items-end">
        <div>
          <h2 class="text-3xl font-serif text-gray-900">Services & Treatments</h2>
          <p class="text-gray-500 mt-2">Manage your luxury treatment offerings.</p>
        </div>
        <button class="px-4 py-2 bg-gold text-white rounded-lg shadow-md hover:bg-gold-dark transition-all duration-200 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
          <span>Add Service</span>
        </button>
      </div>

      <!-- Filters -->
      <div class="flex space-x-4 pb-2 border-b border-gray-100">
        <button class="text-sm font-medium text-gold-dark border-b-2 border-gold pb-2">All Services</button>
        <button class="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2">Injectables</button>
        <button class="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2">Facials</button>
        <button class="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2">Laser</button>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
            @for (service of services(); track service.id) {
              <tr class="hover:bg-gold-50/30 transition-colors duration-150">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ service.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                    {{ service.category }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ service.duration }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-serif font-medium text-gray-900">
                  \${{ service.price }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    [class]="service.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                    {{ service.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button class="text-gold hover:text-gold-dark">Edit</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
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
}
