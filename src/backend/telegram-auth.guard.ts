
/*
 * NOTE: This file is for the NestJS Backend infrastructure layer.
 * It is not used directly by the Angular frontend but is provided as a reference
 * for the requested full-stack authentication flow.
 */

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as crypto from 'crypto';

@Injectable()
export class TelegramAuthGuard implements CanActivate {
  // In a real app, inject ConfigService to get the token
  private readonly BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN';

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    // Cast to any to safely access headers if type definitions are mismatched in this environment
    const authHeader = (request as any).headers?.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Missing Authorization Header');
    }

    // Expected format: "twa-init-data <raw_init_data_string>"
    const [scheme, initData] = authHeader.split(' ');

    if (scheme !== 'twa-init-data' || !initData) {
      throw new UnauthorizedException('Invalid Authorization Scheme');
    }

    try {
      this.validateInitData(initData);
      
      // If validation passes, parse the user data and attach to request
      const urlParams = new URLSearchParams(initData);
      const userJson = urlParams.get('user');
      if (userJson) {
        request['user'] = JSON.parse(userJson);
      }
      
      return true;
    } catch (error) {
      console.error('Telegram Auth Failed:', error);
      throw new UnauthorizedException('Telegram Authentication Failed');
    }
  }

  private validateInitData(initData: string): void {
    const urlParams = new URLSearchParams(initData);
    const hash = urlParams.get('hash');

    if (!hash) {
      throw new Error('Hash missing from initData');
    }

    // 1. Freshness Check (prevent replay attacks)
    const authDate = parseInt(urlParams.get('auth_date') || '0', 10);
    const now = Math.floor(Date.now() / 1000);
    const ONE_DAY = 86400;

    if (now - authDate > ONE_DAY) {
      throw new Error('InitData is expired (older than 24h)');
    }

    // 2. Data sorting and HMAC generation
    urlParams.delete('hash');
    
    // Sort keys alphabetically and join with newline
    const dataToCheck = Array.from(urlParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    // 3. Create Secret Key from Bot Token
    // The secret key is the HMAC-SHA-256 of "WebAppData" with the bot token
    const secretKey = crypto
      .createHmac('sha256', 'WebAppData')
      .update(this.BOT_TOKEN)
      .digest();

    // 4. Calculate Hash
    const calculatedHash = crypto
      .createHmac('sha256', secretKey)
      .update(dataToCheck)
      .digest('hex');

    // 5. Compare
    if (calculatedHash !== hash) {
      throw new Error('Hash verification failed');
    }
  }
}
