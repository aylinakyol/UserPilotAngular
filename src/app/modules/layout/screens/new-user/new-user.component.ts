import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user-request';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  
   constructor(private kullaniciService: KullaniciService , private toastr: ToastrService,private readonly router: Router){
   }
   profileForm = new FormGroup({
    Adi: new FormControl(''),
    Soyadi: new FormControl(''),
    Eposta: new FormControl(''),
    SifreAcik: new FormControl(''),
    CepTelefon: new FormControl(''),

    SicilNo: new FormControl(''),
    Adres: new FormControl(''),
  });
   getValue(){
    const request: UserModel = Object.assign(new UserModel(), this.profileForm.value);
    request.KullaniciId=0;
    request.KullaniciTipiId=2;

     this.kullaniciService.createUser(request).subscribe((result)=>{
        console.warn(result)
        this.toastr.success('Ekleme başarılı')
     })
     
  }
  navigeteTo(route: string) {
    this.router.navigate([route])
   }
}
