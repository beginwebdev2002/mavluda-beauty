
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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
