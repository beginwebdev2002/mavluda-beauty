
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
