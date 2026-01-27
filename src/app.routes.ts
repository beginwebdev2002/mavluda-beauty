

import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './widgets/layouts/admin-layout.component';
import { UserLayoutComponent } from './widgets/layouts/user-layout.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { VeilPageComponent } from './pages/veil/veil.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesCatalogComponent } from './pages/services-catalog/services-catalog.component';
import { PortfolioPageComponent } from './pages/portfolio/portfolio.component';

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
      { path: 'veil', component: VeilPageComponent },
      { path: 'services', component: ServicesPageComponent },
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
      { path: 'services', component: ServicesCatalogComponent },
      { path: 'portfolio', component: PortfolioPageComponent },
      { path: 'profile', component: UserProfileComponent }
    ]
  },

  { path: '**', redirectTo: '' }
];