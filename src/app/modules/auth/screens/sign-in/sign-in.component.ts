import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest } from 'src/app/models/login-request';
import { KullaniciService } from 'src/app/services/kullanici.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    eposta: new FormControl('akyolaylin2@gmail.com'),
    sifre: new FormControl('aylin'),
  });
  message: string = '';
  constructor(
    private readonly localStorageService: LocalStorageService,
    private toastr: ToastrService,
    private readonly router: Router,
    private readonly kullaniciService: KullaniciService
  ) {
  }
  success(): void {

  }
  ngOnInit(): void {
  }

  login() {
    const request: LoginRequest = Object.assign(new LoginRequest(), this.profileForm.value);
    this.kullaniciService.login(request)
    
    .subscribe((data) => {
      console.log(data);
      this.toastr.success('başarılı')
      this.localStorageService.SaveToken(data.authToken)
      this.router.navigate(['/app/kullanicilar'])
    }, (err)=>{
      this.toastr.error('başarısız')
    })
  }
  navigateTo(pas:string){
    this.router.navigate([pas])
  }
}
