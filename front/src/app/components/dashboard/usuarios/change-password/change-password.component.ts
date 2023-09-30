import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  changePassword() {
    if (this.passwordForm.valid) {
      this.userService.changePassword(this.passwordForm.value)
        .then(() => this.router.navigate(['dashboard']) )
        .catch(catchError)
    }
  }
}
