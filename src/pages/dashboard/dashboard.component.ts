
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
}

interface Activity {
  id: number;
  text: string;
  target: string;
  time: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  // FIX: Corrected typo from ChangeChangeDetectionStrategy to ChangeDetectionStrategy
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-4 sm:p-8 max-w-7xl mx-auto space-y-8 animate-page-enter">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="font-display text-3xl font-medium text-gray-900">Dashboard Overview</h1>
          <p class="text-gray-500 mt-1 text-sm">Tuesday, 24 October 2024</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Export Data
          </button>
          <button class="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
            New +
          </button>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        @for (stat of stats(); track stat.title) {
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 rounded-lg bg-gray-50 text-gray-600">
                <span class="material-symbols-outlined text-2xl">{{ stat.icon }}</span>
              </div>
              <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium"
                [class]="stat.trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'">
                <span class="material-symbols-outlined text-[14px] mr-1">{{ stat.trendUp ? 'trending_up' : 'trending_down' }}</span>
                {{ stat.trend }}
              </span>
            </div>
            <p class="text-sm font-medium text-gray-500">{{ stat.title }}</p>
            <h3 class="font-display text-3xl font-semibold text-gray-900 mt-1">{{ stat.value }}</h3>
          </div>
        }
      </div>

      <!-- Analytics and Activity Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Revenue Analytics -->
        <div class="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="font-display text-xl font-semibold text-gray-900">Revenue Analytics</h2>
              <p class="text-sm text-gray-500">Monthly performance overview</p>
            </div>
            <button class="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
              Last 30 Days
              <span class="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
          <div class="h-64 flex items-end justify-between gap-2 pt-4 border-b border-gray-100 pb-2">
            @for(bar of chartBars(); track $index) {
              <div class="w-full rounded-t-sm hover:bg-primary transition-colors cursor-pointer relative group" 
                [class]="bar.highlight ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-gray-100'"
                [style.height.%]="bar.height">
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {{ bar.value }}k
                </div>
              </div>
            }
          </div>
          <div class="flex justify-between text-xs text-gray-400 mt-2 font-medium">
            @for(label of chartLabels(); track label) {
              <span>{{ label }}</span>
            }
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 class="font-display text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div class="space-y-6 relative">
            <div class="absolute left-4 top-2 bottom-2 w-px bg-gray-100"></div>
            @for (item of activities(); track item.id) {
              <div class="relative pl-10">
                <div class="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-white" [class]="item.color">
                  <span class="material-symbols-outlined text-white text-sm">{{ item.icon }}</span>
                </div>
                <div>
                  <p class="text-sm text-gray-900 font-medium">
                    {{ item.text }} <span class="font-bold">{{ item.target }}</span>
                  </p>
                  <span class="text-xs text-gray-500 mt-1 block">{{ item.time }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  stats = signal<StatCard[]>([
    { title: 'Appointments Today', value: '12', trend: '15%', trendUp: true, icon: 'calendar_today' },
    { title: 'Total Revenue', value: '$4,250', trend: '8.2%', trendUp: true, icon: 'attach_money' },
    { title: 'New Clients', value: '24', trend: '4%', trendUp: false, icon: 'group' },
    { title: 'Active Rentals', value: '8', trend: '20%', trendUp: true, icon: 'straighten' }
  ]);

  chartBars = signal<{ height: number; value: number; highlight?: boolean }[]>([
    { height: 30, value: 12 }, { height: 45, value: 18 }, { height: 35, value: 14 },
    { height: 60, value: 25 }, { height: 50, value: 20 }, { height: 80, value: 32, highlight: true },
    { height: 65, value: 26 }, { height: 40, value: 16 }, { height: 55, value: 22 }
  ]);

  chartLabels = signal<string[]>(['1 Oct', '5 Oct', '10 Oct', '15 Oct', '20 Oct', '24 Oct']);

  activities = signal<Activity[]>([
    { id: 1, text: 'New appointment booked', target: 'Sarah J.', time: '2m ago', icon: 'person', color: 'bg-primary' },
    { id: 2, text: 'Inventory alert', target: 'Botox Vials', time: '1h ago', icon: 'warning', color: 'bg-red-500' },
    { id: 3, text: 'Service completed', target: 'Hydrofacial', time: '3h ago', icon: 'check', color: 'bg-green-500' },
    { id: 4, text: 'Veil stock updated', target: 'VL-LACE-042', time: '5h ago', icon: 'edit', color: 'bg-blue-500' }
  ]);
}
