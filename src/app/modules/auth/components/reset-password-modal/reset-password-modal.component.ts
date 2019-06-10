import { Component, 
         OnInit,
         Output,
         EventEmitter 
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginServerAnswer } from '../../interfaces/LoginServerAnswer';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;
  emailReset: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  closeModal(): void {
    this.modalCloseEvent.emit();
  }

  onSubmit(): void {
    this.authService.resetPassword({...this.resetPasswordForm.value}).subscribe((res: LoginServerAnswer) => {
      this.modalCloseEvent.emit();
    });
  }
}
