
import { Injectable, signal } from '@angular/core';

// Declare types for window.Telegram to avoid TS errors without the npm package
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
          auth_date?: number;
          hash?: string;
        };
        setHeaderColor: (color: string) => void;
        close: () => void;
        platform: string;
      };
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private tg = window.Telegram?.WebApp;

  constructor() {
    if (this.isTelegram) {
      this.tg.ready();
      try {
        this.tg.expand();
        this.tg.setHeaderColor('#0A0A0A'); // Match our Dark theme
      } catch (e) {
        console.warn('Telegram WebApp expansion failed', e);
      }
    }
  }

  get isTelegram(): boolean {
    return !!this.tg;
  }

  get initData(): string {
    return this.tg?.initData || '';
  }

  get user() {
    return this.tg?.initDataUnsafe?.user;
  }

  get platform(): string {
    return this.tg?.platform || 'unknown';
  }

  close() {
    this.tg?.close();
  }
}
