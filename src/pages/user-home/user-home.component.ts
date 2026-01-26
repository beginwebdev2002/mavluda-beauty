
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="animate-page-enter">
      <!-- Hero Section -->
      <section class="relative w-full py-12 lg:py-20 xl:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <!-- Text Content -->
            <div class="flex flex-col gap-8 order-2 lg:order-1">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af35]/30 bg-[#d4af35]/5 w-fit backdrop-blur-sm">
                <span class="h-1.5 w-1.5 rounded-full bg-[#d4af35] animate-pulse"></span>
                <span class="text-[#d4af35] text-xs font-bold uppercase tracking-widest">Medical Aesthetics</span>
              </div>
              
              <h1 class="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-white">
                 Redefining <br/>
                 <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af35] via-[#edd685] to-[#d4af35]">Aesthetic Excellence</span>
              </h1>
              
              <p class="text-gray-400 text-lg leading-relaxed max-w-xl border-l-2 border-[#d4af35]/30 pl-6">
                 Mavluda Azizova — Elite Visagiste & Medical Aesthetics Specialist. Where advanced Medical Science meets artistic precision for natural, transformative results.
              </p>
              
              <div class="flex flex-wrap gap-4 pt-4">
                <button class="h-14 min-w-[200px] px-8 bg-[#d4af35] hover:bg-[#b8952a] text-[#0A0A0A] text-base font-bold uppercase tracking-wider rounded transition-all shadow-[0_4px_14px_0_rgba(212,175,53,0.25)] flex items-center justify-center gap-2 group">
                  <span>Secure Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button class="h-14 min-w-[180px] px-8 bg-transparent border border-[#ffffff30] hover:border-[#d4af35] hover:text-[#d4af35] text-white text-base font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center">
                   View Portfolio
                </button>
              </div>

              <!-- Social Proof -->
              <div class="flex items-center gap-4 mt-8 text-sm text-gray-500">
                 <div class="flex -space-x-3">
                   <div class="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-gray-800 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd")'></div>
                   <div class="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-gray-800 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu")'></div>
                   <div class="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-gray-800 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i")'></div>
                 </div>
                 <p><span class="text-[#d4af35] font-bold">500+</span> Satisfied Clients</p>
              </div>
            </div>

            <!-- Image Visual -->
            <div class="relative order-1 lg:order-2">
               <div class="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black border border-white/5 group">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R" 
                       alt="High-end beauty portrait" 
                       class="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                  
                  <!-- Floating Badge -->
                  <div class="absolute bottom-8 left-8 right-8 z-20">
                     <div class="bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-lg border border-[#333] flex items-center justify-between gap-4 shadow-lg">
                        <div>
                           <p class="text-[10px] text-[#d4af35] font-bold uppercase mb-1 tracking-wider">Clinic Status</p>
                           <p class="text-white text-sm font-medium">Accepting New Patients</p>
                        </div>
                        <div class="h-10 w-10 rounded-full bg-[#d4af35] flex items-center justify-center text-[#0A0A0A]">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               
               <!-- Decorative Circle behind image -->
               <div class="absolute -top-10 -right-10 w-full h-full border border-[#d4af35]/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Partners / Trust Section -->
      <section class="w-full py-16 bg-[#121212] border-y border-[#222]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
           <p class="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-12">Trusted Partners & Medical Boards</p>
           
           <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              
              <!-- VOGUE -->
              <div class="flex items-center gap-2 group cursor-default">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-500 group-hover:text-white transition-colors">
                    <path d="M12 2.25l-9 6 9 13.5 9-13.5-9-6z" />
                 </svg>
                 <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">VOGUE</span>
              </div>

              <!-- ELITE -->
              <div class="flex items-center gap-2 group cursor-default">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-500 group-hover:text-white transition-colors">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                 </svg>
                 <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">ELITE</span>
              </div>

              <!-- MED_ASSOC -->
              <div class="flex items-center gap-2 group cursor-default">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-500 group-hover:text-white transition-colors">
                    <path fill-rule="evenodd" d="M11.47 2.293a1 1 0 011.06 0l7.5 7.5a1 1 0 11-1.414 1.414L12 4.414l-6.616 6.793a1 1 0 01-1.414-1.414l7.5-7.5zm-5.379 9C5.393 11.25 5 11.712 5 12.25v6.5A2.25 2.25 0 007.25 21h4.125a.75.75 0 00.75-.75V16.5a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v3.75a.75.75 0 00.75.75h4.125A2.25 2.25 0 0022 18.75v-6.5c0-.538-.393-1-.969-.957a9.38 9.38 0 00-4.991 1.258 9.42 9.42 0 01-8.15 0 9.38 9.38 0 00-1.8 0z" clip-rule="evenodd" />
                 </svg>
                 <span class="text-2xl font-sans font-bold text-gray-500 group-hover:text-white transition-colors tracking-tighter">MED_ASSOC</span>
              </div>

              <!-- PURE -->
              <div class="flex items-center gap-2 group cursor-default">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-500 group-hover:text-white transition-colors">
                    <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                 </svg>
                 <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">PURE</span>
              </div>

              <!-- AESTHETICA -->
              <div class="flex items-center gap-2 group cursor-default">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-gray-500 group-hover:text-white transition-colors">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                 </svg>
                 <span class="text-2xl font-sans font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">AESTHETICA</span>
              </div>
              
           </div>
        </div>
      </section>
    </div>
  `
})
export class UserHomeComponent {}
