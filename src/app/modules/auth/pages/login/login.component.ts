import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalAuthService } from 'app/common/services/global-auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetPasswordModal = false;
  constructor( 
    private router: Router,
    private authServiceGlobal: GlobalAuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.authServiceGlobal.isLogin) {
      this.router.navigate(['/']);
    }
    this.activatedRoute.data.subscribe((value) => {
      console.log(value);
    });
  }
}
