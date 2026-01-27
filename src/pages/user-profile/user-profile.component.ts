
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <main class="flex-grow py-12 animate-page-enter">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <aside class="w-full lg:w-80 flex-shrink-0 space-y-6">
          <div class="rounded-2xl bg-[#121212] border border-[#ffffff10] p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative w-28 h-28 mb-5">
              <img [alt]="user.name" class="w-full h-full object-cover rounded-full border-2 border-primary/50 p-1 shadow-gold-glow" [src]="user.avatarUrl"/>
              <div class="absolute bottom-1 right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-[#121212] z-10">
                <span class="material-symbols-outlined text-[#0A0A0A] text-[16px] font-bold">verified</span>
              </div>
            </div>
            <h3 class="text-white font-serif text-2xl mb-1">{{ user.name }}</h3>
            <p class="text-gray-500 text-xs mb-4">Client ID: #{{ user.id }}</p>
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span class="material-symbols-outlined text-primary text-sm">diamond</span>
              <span class="text-primary text-xs font-bold uppercase tracking-widest">{{ user.status }}</span>
            </div>
            <button class="w-full py-2.5 rounded-lg border border-[#ffffff20] hover:border-primary/50 hover:bg-primary/5 text-gray-400 hover:text-primary transition-all text-xs font-bold uppercase tracking-wider">
                Edit Profile
            </button>
          </div>
          <nav class="rounded-2xl bg-[#121212] border border-[#ffffff10] overflow-hidden p-2">
            <ul class="space-y-1">
              <li>
                <a class="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary text-background-dark font-bold transition-all shadow-gold" href="#">
                  <span class="material-symbols-outlined">dashboard</span>
                  <span class="text-sm uppercase tracking-wide">Overview</span>
                </a>
              </li>
              <li>
                <a class="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
                  <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                  <span class="text-sm uppercase tracking-wide">Appointments</span>
                </a>
              </li>
              <li>
                <a class="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
                  <span class="material-symbols-outlined group-hover:text-primary transition-colors">clinical_notes</span>
                  <span class="text-sm uppercase tracking-wide">Medical Records</span>
                </a>
              </li>
              <li>
                <a class="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
                  <span class="material-symbols-outlined group-hover:text-primary transition-colors">settings</span>
                  <span class="text-sm uppercase tracking-wide">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
          <div class="rounded-2xl bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-[#ffffff10] p-6 text-center">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <span class="material-symbols-outlined">support_agent</span>
            </div>
            <h4 class="text-white font-bold text-sm mb-2">Concierge Support</h4>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">Direct line to your personal aesthetic coordinator.</p>
            <a class="text-primary text-xs font-bold uppercase tracking-wider hover:text-white transition-colors" href="#">Contact Now</a>
          </div>
        </aside>

        <div class="flex-grow space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#ffffff10]">
            <div>
              <p class="text-primary text-xs font-bold uppercase tracking-widest mb-2">Private Dashboard</p>
              <h1 class="text-3xl md:text-5xl font-serif text-white">Welcome back, {{ user.name.split(' ')[0] }}</h1>
            </div>
            <div class="text-right hidden sm:block">
              <p class="text-gray-400 text-sm">Today is</p>
              <p class="text-white font-medium">{{ today.date }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="glass-gold rounded-2xl p-8 relative overflow-hidden group">
              <div class="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>
              <div class="relative z-10">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <span class="inline-block px-2 py-1 rounded bg-black/20 text-primary-hover text-[10px] font-bold uppercase tracking-widest border border-primary/20 mb-2">{{ upcomingAppointment.status }}</span>
                    <h3 class="text-white font-serif text-2xl">Upcoming Appointment</h3>
                  </div>
                  <div class="h-12 w-12 rounded-full bg-black/20 flex items-center justify-center border border-primary/30 text-primary">
                    <span class="material-symbols-outlined">event</span>
                  </div>
                </div>
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3 text-white/90">
                    <span class="material-symbols-outlined text-primary">calendar_today</span>
                    <span class="font-medium">{{ upcomingAppointment.date }}</span>
                  </div>
                  <div class="flex items-center gap-3 text-white/90">
                    <span class="material-symbols-outlined text-primary">schedule</span>
                    <span class="font-medium">{{ upcomingAppointment.time }}</span>
                  </div>
                  <div class="flex items-center gap-3 text-white/90">
                    <span class="material-symbols-outlined text-primary">spa</span>
                    <span class="font-medium">{{ upcomingAppointment.service }}</span>
                  </div>
                </div>
                <div class="flex gap-3">
                  <button class="flex-1 bg-primary text-background-dark font-bold text-xs uppercase tracking-wider py-3 rounded hover:bg-white transition-colors">Reschedule</button>
                  <button class="flex-1 bg-black/20 text-white font-bold text-xs uppercase tracking-wider py-3 rounded border border-primary/30 hover:bg-black/40 transition-colors">Details</button>
                </div>
              </div>
            </div>
            <div class="rounded-2xl bg-[#121212] border border-[#ffffff10] p-8 flex flex-col justify-between relative overflow-hidden">
              <div class="absolute top-0 right-0 p-8 opacity-5">
                <span class="material-symbols-outlined text-9xl">workspace_premium</span>
              </div>
              <div class="relative z-10">
                <div class="flex justify-between items-center mb-6">
                  <h3 class="text-white font-bold uppercase tracking-wider">Loyalty & Rewards</h3>
                  <span class="text-primary text-2xl font-serif italic">{{ loyalty.tier }}</span>
                </div>
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-4xl font-bold text-white">{{ loyalty.points | number }}</span>
                  <span class="text-sm text-gray-400 uppercase tracking-wide">Points Earned</span>
                </div>
                <p class="text-gray-500 text-xs mb-6">{{ loyalty.pointsToNext }} points until Platinum Status</p>
                <div class="w-full h-2 bg-[#222] rounded-full overflow-hidden mb-6">
                  <div class="h-full bg-gradient-to-r from-primary to-[#edd685] rounded-full shadow-[0_0_10px_rgba(212,175,53,0.5)]" [style.width.%]="loyalty.progress"></div>
                </div>
              </div>
              <div class="relative z-10 mt-auto pt-6 border-t border-[#ffffff10] flex justify-between items-center">
                <div class="text-xs text-gray-400">Next Reward: <span class="text-white">{{ loyalty.nextReward }}</span></div>
                <a class="text-primary hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors" href="#">
                  Redeem <span class="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-2xl bg-[#121212] border border-[#ffffff10] overflow-hidden">
            <div class="p-6 border-b border-[#ffffff10] flex justify-between items-center bg-[#161616]">
              <h3 class="text-white font-serif text-lg">Recent Procedures</h3>
              <a class="text-xs text-gray-400 hover:text-primary transition-colors uppercase tracking-wider font-bold" href="#">View All History</a>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-[#1a1a1a] text-xs uppercase text-gray-500 font-medium tracking-wider">
                  <tr>
                    <th class="px-6 py-4">Date</th>
                    <th class="px-6 py-4">Service</th>
                    <th class="px-6 py-4">Specialist</th>
                    <th class="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#ffffff08] text-sm">
                  @for(procedure of recentProcedures; track procedure.date) {
                    <tr class="hover:bg-white/5 transition-colors">
                      <td class="px-6 py-4 text-gray-300">{{ procedure.date }}</td>
                      <td class="px-6 py-4">
                        <div class="font-bold text-white">{{ procedure.service }}</div>
                        <div class="text-xs text-gray-500">{{ procedure.category }}</div>
                      </td>
                      <td class="px-6 py-4 text-gray-300">{{ procedure.specialist }}</td>
                      <td class="px-6 py-4 text-right">
                        <a [href]="procedure.link" class="text-xs font-bold uppercase tracking-wide transition-colors" [class]="procedure.status === 'Archived' ? 'text-gray-500 hover:text-white' : 'text-primary hover:text-white'">
                          {{ procedure.status }}
                        </a>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div class="rounded-2xl bg-[#121212] border border-[#ffffff10] p-6 flex flex-col md:flex-row gap-6 items-start">
            <div class="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined">medical_information</span>
            </div>
            <div class="flex-grow">
              <h3 class="text-white font-bold mb-2 uppercase tracking-wide text-sm">Latest Medical Note Summary</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-3">{{ latestNote.summary }}</p>
              <div class="flex gap-4 text-xs text-gray-500">
                <span>Recorded by: <span class="text-gray-300">{{ latestNote.recorder }}</span></span>
                <span>Date: <span class="text-gray-300">{{ latestNote.date }}</span></span>
              </div>
            </div>
            <button class="flex-shrink-0 px-4 py-2 border border-[#333] hover:border-primary text-gray-400 hover:text-primary rounded-lg uppercase tracking-wide text-xs font-bold transition-all">
              Full History
            </button>
          </div>
        </div>
      </div>
      </div>
    </main>
  `
})
export class UserProfileComponent {
  user = {
    name: 'Sophia Anderson',
    id: 'MA-8821',
    status: 'Gold Member',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i'
  };

  upcomingAppointment = {
    status: 'Confirmed',
    date: 'October 28, 2024',
    time: '10:00 AM - 11:30 AM',
    service: 'Full Face Rejuvenation'
  };
  
  loyalty = {
    tier: 'Gold Tier',
    points: 1250,
    pointsToNext: 750,
    progress: 65,
    nextReward: 'Comp. Skin Analysis'
  };
  
  recentProcedures = [
    { date: 'Sep 15, 2024', service: 'HydraFacial Elite', category: 'Skin Therapy', specialist: 'Dr. Azizova', status: 'View Results', link: '#' },
    { date: 'Aug 02, 2024', service: 'Botulinum Therapy', category: 'Medical Aesthetics', specialist: 'Dr. Azizova', status: 'View Results', link: '#' },
    { date: 'Jun 18, 2024', service: 'Evening Glamour', category: 'Professional Visage', specialist: 'Elena V.', status: 'Archived', link: '#' }
  ];
  
  latestNote = {
    summary: 'Skin sensitivity slightly elevated during last session. Recommended reducing retinol usage frequency to 2x/week for the next 14 days. Hydration levels have improved significantly since August.',
    recorder: 'Dr. Mavluda Azizova',
    date: 'Sep 15, 2024'
  };
  
  today = {
    date: 'October 24, 2024'
  };
}
