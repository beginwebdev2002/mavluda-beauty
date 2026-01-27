
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <section class="relative w-full py-12 lg:py-20 xl:py-24">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text Content -->
                <div class="flex flex-col gap-8 order-2 lg:order-1">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit">
                        <span class="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span class="text-primary text-xs font-bold uppercase tracking-widest">Medical Aesthetics</span>
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                        Redefining <br/>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#edd685] to-primary">Aesthetic Excellence</span>
                    </h1>
                    <p class="text-gray-400 text-lg leading-relaxed max-w-xl border-l-2 border-primary/30 pl-6">
                        Mavluda Azizova — Elite Visagiste &amp; Medical Aesthetics Specialist. Where advanced Medical Science meets artistic precision for natural, transformative results.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <button class="h-14 min-w-[200px] px-8 bg-primary hover:bg-primary-hover text-[#0A0A0A] text-base font-bold uppercase tracking-wider rounded transition-all shadow-gold flex items-center justify-center gap-2 group">
                            <span>Secure Consultation</span>
                            <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                        <button class="h-14 min-w-[180px] px-8 bg-transparent border border-[#ffffff30] hover:border-primary hover:text-primary text-white text-base font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center">
                            View Portfolio
                        </button>
                    </div>
                    <!-- Small social proof -->
                    <div class="flex items-center gap-4 mt-8 text-sm text-gray-500">
                        <div class="flex -space-x-3">
                            <img ngSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB34PkR8y1rYZNuLirjoa_FFY2CY_sTtk3E3D3TyDA3ETuKZbV1f8UE43MtJowMY1QOkYx7mK8J63t1ElZzHXCDnlJcQYrZMqn3_uOkUn73PcyqERAFxeNewueco1IiX_dN1plTcEHcp1rjm_S-F900peq3YKUrZ9edGuDoXDqmXhfYwwt_qDbLHdlaxqKvcczg_kPsJADCRIBk8kD3gHj-EZsWUO2PlGmKPvoLa2z6haQa_oPg1yQuDbLaUjPG84AAjlPmus3FpnTd" width="40" height="40" alt="Client Portrait 1" class="h-10 w-10 rounded-full border-2 border-background-dark object-cover"/>
                            <img ngSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCN_i0UQ2DDBO3oiICvkDjAAQV4CBheKjtZbeV5zkQ3A3tngd9-v_70jN19UdyigQVFmmIJDEC6KKFrFXpRZnADtipZUJtbLTQrkC2elu6cCE8YLFAfsNR4Sy2SSAkC9vrYzA1VIzXnfpODZ7BB0sLbToeWMEeyWAB73l2Knzq96QXhRvBQlRlC3T7NRYn2TyQGjGmRmuoej4liuPk-DWB4caahTA2ZC7ui3ZRdGP1RwFDSRGLLzJclNcKQCbsaytClAoq-wBZgNMuu" width="40" height="40" alt="Client Portrait 2" class="h-10 w-10 rounded-full border-2 border-background-dark object-cover"/>
                            <img ngSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD08o6hF5_pbFiIJqYs4VYYrPPviAtlB2PjR4z2lZYzuT3rcSqK7UbUQNiOic7Y-5L8OgQjXfDI3pcgi0scXP-E6zXsJwv5g2J3sX89thdN8QagJQQCwGJWt96_rVAjbhNezpl35TsKsDKDFcyUdrK2qT0yPcFM3kP0hOXpqC8ZB7OFulzRzNGWHZR0Hw2QbGd77Id8wWieXLWUC7eU1JKb3MgO6TXvXzAJQth53BY6a91dqAL2kuvJKelagAgLC2sRUWQy1FQ6Ul7i" width="40" height="40" alt="Client Portrait 3" class="h-10 w-10 rounded-full border-2 border-background-dark object-cover"/>
                        </div>
                        <p><span class="text-primary font-bold">500+</span> Satisfied Clients</p>
                    </div>
                </div>
                <!-- Image Visual -->
                <div class="relative order-1 lg:order-2">
                    <div class="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                        <img ngSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCnLA3tyCDcRymBx90wrQjtgGrWXr_0vKq72g14XO5LhCtxN0fIKkFn9IKD6M6rsiu2j-1__eQ3HJiho2vFk_lUHKNgfQNS64FGix2N4F6nBTaf3Rj8L6dICODAdpKFsPPMxMl_Pmvzxp-eFvAmxPVLjUW97KBGsfct4_5BDBksKXVjK3k0-dAiz7QQdGnsOy0tfeqFvOTrXr6fFz-G7dqpR1pQtskfaENZz1vQbsl1ShEaci5i8fDDN3Z_aU8hZQl4VkxlfL-rO07R" width="800" height="1000" priority alt="High-end beauty portrait showing flawless skin and aesthetic treatments" class="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"/>
                        <!-- Floating Badge -->
                        <div class="absolute bottom-8 left-8 right-8 z-20">
                            <div class="bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-lg border border-[#333] flex items-center justify-between gap-4">
                                <div>
                                    <p class="text-xs text-primary font-bold uppercase mb-1">Clinic Status</p>
                                    <p class="text-white text-sm font-medium">Accepting New Patients</p>
                                </div>
                                <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
                                    <span class="material-symbols-outlined">check_circle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Decorative Circle behind image -->
                    <div class="absolute -top-10 -right-10 w-full h-full border border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- Partners / Trust Section -->
    <section class="w-full py-16 bg-background-card border-y border-[#222]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p class="text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-12">Trusted Partners &amp; Medical Boards</p>
            <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <!-- Logos -->
                <div class="flex items-center gap-2 group cursor-default">
                    <span class="material-symbols-outlined text-4xl text-gray-500 group-hover:text-white transition-colors">diamond</span>
                    <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">VOGUE</span>
                </div>
                <div class="flex items-center gap-2 group cursor-default">
                    <span class="material-symbols-outlined text-4xl text-gray-500 group-hover:text-white transition-colors">hotel_class</span>
                    <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">ELITE</span>
                </div>
                <div class="flex items-center gap-2 group cursor-default">
                    <span class="material-symbols-outlined text-4xl text-gray-500 group-hover:text-white transition-colors">medication</span>
                    <span class="text-2xl font-sans font-bold text-gray-500 group-hover:text-white transition-colors tracking-tighter">MED_ASSOC</span>
                </div>
                <div class="flex items-center gap-2 group cursor-default">
                    <span class="material-symbols-outlined text-4xl text-gray-500 group-hover:text-white transition-colors">spa</span>
                    <span class="text-2xl font-serif font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">PURE</span>
                </div>
                <div class="flex items-center gap-2 group cursor-default">
                    <span class="material-symbols-outlined text-4xl text-gray-500 group-hover:text-white transition-colors">local_hospital</span>
                    <span class="text-2xl font-sans font-bold text-gray-500 group-hover:text-white transition-colors tracking-tight">AESTHETICA</span>
                </div>
            </div>
        </div>
    </section>
  `
})
export class UserHomeComponent {}
