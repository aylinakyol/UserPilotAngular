import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  profileForm = new FormGroup({
    eposta: new FormControl(''),
    eskisifre: new FormControl(''),
    yenisifre: new FormControl(''),
    yenisifretekrar: new FormControl('')
  });
  constructor(private kullaniciService: KullaniciService){}
 changePassword(){
      this.kullaniciService.ChangePassword(this.profileForm.value).subscribe((data)=>
      {console.log(data.Description)})
 }
}
