
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

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
  imports: [CommonModule, SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="animate-page-enter">
      <!-- Header -->
      <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 class="text-3xl font-serif text-gray-900 tracking-tight">Dashboard Overview</h1>
          <p class="text-sm text-gray-500 mt-2 font-medium">Tuesday, 24 October 2024</p>
        </div>
        <div class="flex gap-3">
          <button class="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium transition-colors">Export Data</button>
          <button class="px-4 py-2 bg-dark text-white rounded-lg shadow-md hover:bg-gray-800 text-sm font-medium transition-colors">New Appointment</button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        @for (stat of stats(); track stat.title) {
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-gold-sm hover:border-gold/30 group">
            <div class="flex items-start justify-between mb-4">
              <div class="p-3 rounded-xl bg-gray-50 text-gray-600 group-hover:bg-gold-50 group-hover:text-gold-dark transition-colors duration-300" [innerHTML]="stat.icon | safeHtml"></div>
              <span 
                [class]="stat.trendUp ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'" 
                class="px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center"
              >
                @if (stat.trendUp) { ↗ } @else { ↘ } {{ stat.trend }}
              </span>
            </div>
            
            <div class="space-y-1">
              <dt class="text-sm font-medium text-gray-500">{{ stat.title }}</dt>
              <dd class="text-2xl font-bold text-gray-900 tracking-tight font-serif">{{ stat.value }}</dd>
            </div>
          </div>
        }
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Main Chart Section -->
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div class="flex items-center justify-between mb-8">
            <div>
               <h3 class="text-lg font-bold text-gray-900 font-serif">Revenue Analytics</h3>
               <p class="text-sm text-gray-500 mt-1">Monthly performance overview</p>
            </div>
            <select class="text-sm border-gray-200 rounded-lg text-gray-600 focus:ring-gold focus:border-gold">
               <option>Last 30 Days</option>
               <option>This Year</option>
            </select>
          </div>
          
          <div class="h-80 bg-gradient-to-b from-gray-50 to-white rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <svg class="w-16 h-16 text-gray-300 mb-3 group-hover:text-gold/50 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            <p class="text-gray-400 font-medium">Interactive Data Visualization</p>
            <p class="text-xs text-gray-400 mt-2">D3.js Chart Component will render here</p>
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 class="text-lg font-bold text-gray-900 font-serif mb-6">Recent Activity</h3>
          <div class="flow-root">
            <ul role="list" class="-mb-8">
              @for (item of activities; track item.id; let last = $last) {
                <li>
                  <div class="relative pb-8">
                    @if (!last) {
                      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-100" aria-hidden="true"></span>
                    }
                    <div class="relative flex space-x-3">
                      <div>
                        <span [class]="item.bgColor" class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
                           <span [innerHTML]="item.icon | safeHtml" class="text-white w-4 h-4"></span>
                        </span>
                      </div>
                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p class="text-sm text-gray-900 font-medium">{{ item.content }} <span class="font-bold text-gray-900"> {{ item.target }}</span></p>
                        </div>
                        <div class="text-right text-xs whitespace-nowrap text-gray-500">
                          <time [attr.datetime]="item.datetime">{{ item.date }}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              }
            </ul>
          </div>
          <button class="w-full mt-6 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:text-gold hover:border-gold transition-colors">View All History</button>
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

  activities = [
    { 
      id: 1, 
      content: 'New appointment booked', 
      target: 'Sarah J.', 
      date: '2m ago', 
      datetime: '2023-10-24T10:00',
      bgColor: 'bg-gold',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>'
    },
    { 
      id: 2, 
      content: 'Inventory alert', 
      target: 'Botox Vials', 
      date: '1h ago', 
      datetime: '2023-10-24T09:00',
      bgColor: 'bg-red-500',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    },
    { 
      id: 3, 
      content: 'Payment received', 
      target: '$450.00', 
      date: '3h ago', 
      datetime: '2023-10-24T07:00',
      bgColor: 'bg-green-500',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
  ];
}
