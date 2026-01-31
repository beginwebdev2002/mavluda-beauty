
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="flex-grow animate-page-enter">
      <section class="relative pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div class="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div class="relative mx-auto w-24 h-24 mb-10 group cursor-default">
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
            <div class="relative w-full h-full border-2 border-gold/60 rounded-full flex items-center justify-center bg-background-dark">
              <span class="font-serif text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gold to-[#b8952a] translate-y-1">M</span>
            </div>
          </div>
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl text-white mb-8 tracking-tight leading-[1.1]">
            The Pinnacle of <br class="hidden sm:block"/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#edd685] via-primary to-[#b8952a]">Aesthetic Artistry</span>
          </h1>
          <div class="prose prose-lg prose-invert mx-auto text-gray-300 leading-relaxed font-light">
            <p class="mb-6 text-xl">
              Mavluda Azizova stands at the vanguard of medical aesthetics in Tajikistan, harmonizing advanced dermatological science with the delicate touch of high-end artistry.
            </p>
            <p class="text-gray-400 text-base">
              With over a decade of clinical excellence, our center is founded on the philosophy that true beauty is not constructed, but revealed. We employ FDA-approved technologies and bespoke protocols to ensure every treatment is as unique as the individual receiving it. In our sanctuary of transformation, privacy is paramount, and perfection is the only standard.
            </p>
          </div>
          <div class="mt-12 flex justify-center">
            <div class="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </div>
        </div>
      </section>

      <section id="contact" class="py-20 bg-background-card border-t border-[#ffffff08] relative">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div class="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 class="font-serif text-3xl lg:text-4xl text-white mb-2">Private Sanctuary</h2>
                <p class="text-primary text-sm uppercase tracking-widest font-bold mb-10">Contact &amp; Location</p>
                <div class="space-y-8">
                  <div class="flex items-start gap-5 group reveal-item" style="animation-delay: 100ms;">
                    <div class="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-gold-glow">
                      <span class="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 class="text-white font-serif text-lg">Visit the Center</h3>
                      <p class="text-gray-400 font-light mt-1">Rudaki Avenue 127, Suite 402<br/>Dushanbe, Tajikistan</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-5 group reveal-item" style="animation-delay: 200ms;">
                    <div class="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-gold-glow">
                      <span class="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h3 class="text-white font-serif text-lg">Concierge Line</h3>
                      <p class="text-gray-400 font-light mt-1">+992 (90) 000-0000</p>
                      <p class="text-xs text-primary mt-1">Available 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-5 group reveal-item" style="animation-delay: 300ms;">
                    <div class="h-12 w-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-gold-glow">
                      <span class="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 class="text-white font-serif text-lg">Digital Inquiries</h3>
                      <p class="text-gray-400 font-light mt-1">concierge@mavluda-beauty.tj</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-12">
                <h3 class="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-primary pl-3">Connect via Socials</h3>
                <div class="max-w-md">
                  <div class="grid grid-cols-4 gap-4">
                    <a class="aspect-square flex flex-col items-center justify-center border border-[#ffffff15] hover:border-primary bg-[#0A0A0A] group transition-all duration-300 rounded-lg" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                      </svg>
                      <span class="mt-2 text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-white">Chat</span>
                    </a>
                    <a class="aspect-square flex flex-col items-center justify-center border border-[#ffffff15] hover:border-primary bg-[#0A0A0A] group transition-all duration-300 rounded-lg" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.62 12.15c-.73-.23-.74-.74.13-1.02l16.24-6.27c.66-.25 1.22.17 1.02.94L19.46 16.7c-.24.93-.85 1.12-1.51.72l-4.52-3.35-2.13 2.05c-.24.24-.44.44-.8.44l.01.01z"/></svg>
                      <span class="mt-2 text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-white">Join</span>
                    </a>
                    <a class="aspect-square flex flex-col items-center justify-center border border-[#ffffff15] hover:border-primary bg-[#0A0A0A] group transition-all duration-300 rounded-lg" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                      <span class="mt-2 text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-white">View</span>
                    </a>
                    <a class="aspect-square flex flex-col items-center justify-center border border-[#ffffff15] hover:border-primary bg-[#0A0A0A] group transition-all duration-300 rounded-lg" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v9h4v-9z"/></svg>
                      <span class="mt-2 text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-white">Like</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-7">
              <div class="bg-[#0A0A0A] border border-[#ffffff10] p-8 lg:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 class="font-serif text-2xl text-white mb-2">VIP Inquiry</h3>
                <p class="text-gray-400 text-sm mb-8">Request a private consultation. Our team will contact you within 24 hours.</p>
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6 relative z-10">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label class="text-xs uppercase tracking-wider text-gray-500 font-bold">Full Name</label>
                      <input formControlName="fullName" class="w-full bg-[#151515] border-0 border-b border-[#333] focus:border-primary focus:ring-0 text-white px-0 py-3 transition-colors placeholder:text-gray-600" placeholder="e.g. Malika Karimova" type="text"/>
                    </div>
                    <div class="space-y-2">
                      <label class="text-xs uppercase tracking-wider text-gray-500 font-bold">Phone Number</label>
                      <input formControlName="phoneNumber" class="w-full bg-[#151515] border-0 border-b border-[#333] focus:border-primary focus:ring-0 text-white px-0 py-3 transition-colors placeholder:text-gray-600" placeholder="+992 ..." type="tel"/>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs uppercase tracking-wider text-gray-500 font-bold">Service of Interest</label>
                    <select formControlName="serviceOfInterest" class="w-full bg-[#151515] border-0 border-b border-[#333] focus:border-primary focus:ring-0 text-white px-0 py-3 transition-colors">
                      <option>Select a treatment...</option>
                      <option>Medical Facial</option>
                      <option>Laser Treatment</option>
                      <option>Injectables (Botox/Fillers)</option>
                      <option>Visagiste Consultation</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label class="text-xs uppercase tracking-wider text-gray-500 font-bold">Message</label>
                    <textarea formControlName="message" class="w-full bg-[#151515] border-0 border-b border-[#333] focus:border-primary focus:ring-0 text-white px-0 py-3 transition-colors placeholder:text-gray-600 resize-none" placeholder="Tell us about your aesthetic goals..." rows="3"></textarea>
                  </div>
                  <div class="pt-4">
                    <button class="w-full h-14 bg-primary hover:bg-primary-hover text-background-dark font-bold uppercase tracking-wider rounded transition-all shadow-gold flex items-center justify-center gap-2 group btn-primary-shimmer active:scale-[0.98]" type="submit">
                      <span>Submit Request</span>
                      <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-20 relative w-full h-[400px] rounded-xl overflow-hidden border border-[#ffffff10] group map-container">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-2xl">
              <div class="relative">
                <span class="material-symbols-outlined text-5xl text-primary animate-bounce">location_on</span>
                <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/50 blur-sm rounded-[100%]"></div>
              </div>
            </div>
            <iframe allowfullscreen="" class="map-grayscale transition-all duration-700 w-full h-full opacity-80 group-hover:opacity-100" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.72195867906!2d68.70670878583486!3d38.56156386866579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d16c7476569b%3A0x8849646b5a34241!2sDushanbe%2C%2Tadjikistan!5e0!3m2!1sen!2sus!4v1647853162725!5m2!1sen!2sus" style="border:0;" width="100%">
            </iframe>
            <div class="absolute bottom-4 left-4 bg-background-dark/90 backdrop-blur border border-primary/20 px-4 py-2 rounded pointer-events-none">
              <p class="text-xs text-primary font-bold uppercase">Mavluda Azizova Center</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})
export class AboutComponent {
  // Fix: Explicitly type injected FormBuilder to resolve type inference issue.
  private fb: FormBuilder = inject(FormBuilder);

  contactForm = this.fb.group({
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    serviceOfInterest: ['Select a treatment...', Validators.required],
    message: ['']
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Here you would typically send the data to a service
    } else {
      console.log('Form is invalid');
    }
  }
}
