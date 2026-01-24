
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <div class="mb-8">
        <h1 class="text-2xl font-serif text-gray-900">Welcome back, Mavluda</h1>
        <p class="text-sm text-gray-500 mt-1">Here is what's happening in your ecosystem today.</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        @for (stat of stats(); track stat.title) {
          <div class="bg-white overflow-hidden rounded-xl shadow-sm border border-gray-100 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
            <div class="flex items-center">
              <div class="flex-shrink-0 p-3 rounded-lg bg-gold-50 text-gold-dark" [innerHTML]="stat.icon"></div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">{{ stat.title }}</dt>
                  <dd>
                    <div class="text-xl font-bold text-gray-900">{{ stat.value }}</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex items-center text-sm">
                <span [class]="stat.trendUp ? 'text-green-600' : 'text-red-600'" class="flex items-center font-medium">
                  @if (stat.trendUp) {
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  } @else {
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                  }
                  {{ stat.trend }}
                </span>
                <span class="text-gray-400 ml-2">from last month</span>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Content Placeholder (Chart Area) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Chart Area -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900 font-serif">Revenue Overview</h3>
            <button class="text-sm text-gold hover:text-gold-dark font-medium">View Report</button>
          </div>
          <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
            <p class="text-gray-400">Chart Visualization Widget Placeholder</p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900 font-serif mb-6">Recent Activity</h3>
          <ul class="space-y-6">
            <li class="relative pl-6 border-l-2 border-gray-200">
              <div class="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gold border-2 border-white"></div>
              <p class="text-sm text-gray-600">New appointment booked by <span class="font-medium text-gray-900">Sarah J.</span></p>
              <p class="text-xs text-gray-400 mt-0.5">2 mins ago</p>
            </li>
            <li class="relative pl-6 border-l-2 border-gray-200">
              <div class="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300 border-2 border-white"></div>
              <p class="text-sm text-gray-600">Inventory alert: <span class="font-medium text-gray-900">Botox Vials</span> low.</p>
              <p class="text-xs text-gray-400 mt-0.5">1 hour ago</p>
            </li>
            <li class="relative pl-6 border-l-2 border-gray-200">
              <div class="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300 border-2 border-white"></div>
              <p class="text-sm text-gray-600">Payment received from <span class="font-medium text-gray-900">Dresses Rental</span>.</p>
              <p class="text-xs text-gray-400 mt-0.5">3 hours ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  stats = signal<StatCard[]>([
    {
      title: 'Appointments Today',
      value: '12',
      trend: '15%',
      trendUp: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>'
    },
    {
      title: 'Total Revenue',
      value: '$4,250',
      trend: '8.2%',
      trendUp: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
    {
      title: 'New Clients',
      value: '24',
      trend: '4%',
      trendUp: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    },
    {
      title: 'Active Rentals',
      value: '8',
      trend: '20%',
      trendUp: true,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m11.6 16.4 3 3"/><path d="m18 8.6-3-3"/><path d="m9 11 8.1-7.4a2 2 0 0 1 2.7 2.7L12.4 14.4"/><path d="m19 5 2 2"/></svg>'
    }
  ]);
}
