
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-serif text-gray-900">Inventory Management</h2>
        <div class="flex space-x-3">
             <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Export Report</button>
             <button class="px-4 py-2 bg-dark text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all text-sm font-medium">Add Product</button>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-dark to-gray-900 rounded-xl p-6 text-white shadow-lg">
           <div class="text-gray-400 text-sm mb-1">Total Stock Value</div>
           <div class="text-2xl font-serif font-bold text-gold">$124,500</div>
        </div>
         <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
           <div class="text-gray-500 text-sm mb-1">Low Stock Items</div>
           <div class="text-2xl font-serif font-bold text-red-600">3</div>
        </div>
         <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
           <div class="text-gray-500 text-sm mb-1">Suppliers</div>
           <div class="text-2xl font-serif font-bold text-gray-900">8</div>
        </div>
      </div>

      <!-- Inventory Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (item of inventory(); track item.id) {
          <div class="group bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-gold/30 transition-all duration-300">
            <div class="flex justify-between items-start mb-4">
                <div class="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-xl">
                    {{ item.icon }}
                </div>
                <span [class]="item.quantity < 10 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'" class="px-2 py-1 rounded text-xs font-bold">
                    {{ item.quantity }} in stock
                </span>
            </div>
            <h3 class="font-serif text-lg font-medium text-gray-900 group-hover:text-gold-dark transition-colors">{{ item.name }}</h3>
            <p class="text-sm text-gray-500 mb-4">{{ item.sku }}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
                <span class="text-sm font-medium text-gray-900">Cost: \${{ item.cost }}</span>
                <button class="text-xs text-gold font-medium uppercase tracking-wide hover:underline">Restock</button>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class InventoryPageComponent {
  inventory = signal([
    { id: 1, name: 'Botox Vial (100u)', sku: 'BTX-100', quantity: 45, cost: 200, icon: '💉' },
    { id: 2, name: 'Juvederm Ultra', sku: 'JUV-ULT', quantity: 8, cost: 180, icon: '💧' },
    { id: 3, name: 'Numbing Cream 50g', sku: 'NUM-50', quantity: 120, cost: 15, icon: '🧴' },
    { id: 4, name: 'Surgical Gloves (M)', sku: 'GLV-M', quantity: 500, cost: 0.2, icon: '🧤' },
    { id: 5, name: 'Gold Mask Serum', sku: 'GLD-SRM', quantity: 2, cost: 45, icon: '✨' },
  ]);
}
