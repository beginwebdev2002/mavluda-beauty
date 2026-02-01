
import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public authService = inject(AuthService);

  ngOnInit() {
    // Trigger authentication check on app launch
    this.authService.checkTelegramAuth();
  }
}
