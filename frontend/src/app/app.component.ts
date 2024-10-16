import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);
  userForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.email]
  }) as FormGroup;;
  user$?: Observable<User>;

  onSubmit() {
    if (this.userForm?.invalid) return;

    this.user$ = this.userService.saveUser(this.userForm?.value as User);
  }

}
