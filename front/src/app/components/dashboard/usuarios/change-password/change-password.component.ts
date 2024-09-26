import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder,
    private snackBar: MatSnackBar,
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
        .then(() => {
          const snackBarRef = this.snackBar.open("La contraseña fue actualizada con éxito!", "", {
            duration: 1000,
            horizontalPosition: "center",
            verticalPosition: "bottom"
          });
  
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['dashboard']);
          });
        })
        .catch(() => {
          const snackBarRef = this.snackBar.open(`No pudo actualizarse la contraseña`, "", {
            duration: 1500,
            horizontalPosition: "center",
            verticalPosition: "bottom",
            panelClass: ['custom-snackbar']
          });
  
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['dashboard']);
          });
        })
    }
  }
}
