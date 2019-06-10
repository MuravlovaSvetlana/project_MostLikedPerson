import { Component, OnInit } from '@angular/core';
import { FormControl, 
         FormGroup, 
         Validators, 
         FormGroupDirective, 
         NgForm 
} from '@angular/forms';
import { passwordEqualForInput } from '@helpers/validators';
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginServerAnswer } from '../../interfaces/LoginServerAnswer';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      first_name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [ Validators.required, passwordEqualForInput ]),
      nickname: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gender_orientation: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      date_of_birth_day: new FormControl('', Validators.required),
      date_of_birth_month: new FormControl('', Validators.required),
      date_of_birth_year: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.signUpForm.value);
    if (this.signUpForm.invalid) {
      return console.log('Validate error');
    }
    this.authService.signup({...this.signUpForm.value}).subscribe((res: LoginServerAnswer) => {
      this.router.navigate(['/auth/login']);
    });
  }
}
