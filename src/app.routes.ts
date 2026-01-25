

import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './widgets/layouts/admin-layout.component';
import { UserLayoutComponent } from './widgets/layouts/user-layout.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { InventoryPageComponent } from './pages/inventory/inventory.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auth', component: AuthComponent },
  
  // Admin Routes
  { 
    path: 'admin', 
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'services', component: ServicesPageComponent },
      { path: 'inventory', component: InventoryPageComponent },
      // Placeholders for other routes
      { path: 'appointments', component: DashboardComponent },
      { path: 'clients', component: DashboardComponent },
    ]
  },

  // User Routes
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UserHomeComponent },
      { path: 'services', component: ServicesPageComponent }, // Reusing for now (read-only mode would be ideal later)
      { path: 'profile', component: UserProfileComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];
