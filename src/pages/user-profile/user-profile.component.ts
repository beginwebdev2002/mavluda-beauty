
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageSwitcherComponent } from '../../features/language-selection/language-switcher.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 animate-page-enter">
      <!-- Header -->
      <div class="mb-10 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 class="text-3xl font-serif text-gray-900">My Profile</h2>
          <p class="text-gray-500 mt-2">Manage your personal information and preferences.</p>
        </div>
        <app-language-switcher></app-language-switcher>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        <!-- Profile Header / Avatar -->
        <div class="relative h-32 bg-dark">
          <div class="absolute inset-0 bg-gradient-to-r from-dark to-[#1a1a1a]"></div>
          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-[2rem]"></div>
          
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-16">
             <div class="relative group">
                <div class="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                  <img src="https://picsum.photos/200/200" alt="Profile" class="w-full h-full object-cover">
                </div>
                <button class="absolute bottom-0 right-0 p-1.5 bg-gold text-white rounded-full shadow-md hover:bg-gold-dark transition-colors" title="Change Photo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </button>
             </div>
          </div>
        </div>

        <div class="pt-16 pb-8 px-8">
           
           <div class="text-center mb-8">
             <h3 class="text-xl font-bold text-gray-900">{{ profileForm.get('name')?.value }}</h3>
             <p class="text-gold font-medium text-sm">VIP Client</p>
           </div>

           <!-- Form -->
           <form [formGroup]="profileForm" (ngSubmit)="saveProfile()" class="max-w-lg mx-auto space-y-6">
             
             <!-- Name -->
             <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    [readonly]="!isEditing()"
                    [class.bg-gray-50]="!isEditing()"
                    [class.border-transparent]="!isEditing()"
                    class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold sm:text-sm transition-all duration-200"
                  >
                </div>
             </div>

             <!-- Email -->
             <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                <div class="relative">
                   <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    [readonly]="!isEditing()"
                    [class.bg-gray-50]="!isEditing()"
                     [class.border-transparent]="!isEditing()"
                    class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold sm:text-sm transition-all duration-200"
                  >
                </div>
             </div>

             <!-- Phone -->
             <div class="space-y-2">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                 <div class="relative">
                   <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    [readonly]="!isEditing()"
                    [class.bg-gray-50]="!isEditing()"
                     [class.border-transparent]="!isEditing()"
                    class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold sm:text-sm transition-all duration-200"
                  >
                </div>
             </div>

             <!-- Actions -->
             <div class="pt-4 flex justify-end space-x-3">
               @if (!isEditing()) {
                  <button 
                    type="button" 
                    (click)="enableEdit()"
                    class="px-6 py-2.5 bg-dark text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                  >
                    Edit Profile
                  </button>
               } @else {
                  <button 
                    type="button" 
                    (click)="cancelEdit()"
                    class="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    class="px-6 py-2.5 bg-gold text-white rounded-lg shadow-lg hover:bg-gold-dark transition-all duration-300 text-sm font-medium"
                  >
                    Save Changes
                  </button>
               }
             </div>

           </form>
        </div>
      </div>
    </div>
  `
})
export class UserProfileComponent {
  private fb: FormBuilder = inject(FormBuilder);
  
  isEditing = signal(false);

  profileForm = this.fb.group({
    name: ['Mavluda Azizova', [Validators.required]],
    email: ['client@example.com', [Validators.required, Validators.email]],
    phone: ['+992 900 00 00 00', [Validators.required]]
  });

  enableEdit() {
    this.isEditing.set(true);
  }

  cancelEdit() {
    // Reset to initial values (mock logic here, ideally from a service)
    this.profileForm.patchValue({
        name: 'Mavluda Azizova',
        email: 'client@example.com',
        phone: '+992 900 00 00 00'
    });
    this.isEditing.set(false);
  }

  saveProfile() {
    if (this.profileForm.valid) {
      // Save logic here
      console.log('Profile Saved:', this.profileForm.value);
      this.isEditing.set(false);
    }
  }
}
