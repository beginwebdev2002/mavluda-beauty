
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
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
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
