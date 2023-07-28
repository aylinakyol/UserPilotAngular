import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-request';
import { UserResult } from 'src/app/models/user-result';
import { KullaniciService } from 'src/app/services/kullanici.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  user: UserModel
  a:any
  ngOnInit(): void {
    this.a=this.route.snapshot.paramMap.get('id');
    this.kullaniciService.GetSingle(this.a).subscribe((response: UserModel ) =>{ 
      this.user=response;
      this.profileForm.patchValue(this.user);
    })

    console.log(this.a);
  }

  profileForm = new FormGroup({
    Adi: new FormControl(''),
    Soyadi: new FormControl(''),
    Eposta: new FormControl(''),
    CepTelefon: new FormControl('')
  });
  constructor(private router : Router,private route: ActivatedRoute,private kullaniciService: KullaniciService,private toastr :ToastrService){
  }
 
  updateUser(){
    var numberValue = Number(this.a);
    const request:UserResult=Object.assign(new UserResult(),this.profileForm.value);
    this.user.Adi=request.Adi;
    this.user.CepTelefon=request.CepTelefon;
    this.user.Eposta=request.Eposta;
    this.user.Soyadi=request.Soyadi;
    this.kullaniciService.UpdateUser(this.user)
    .subscribe((result)=>{
      console.log(result);
      if(result.Successful)
      this.toastr.success('başarılı');
      else{
      this.toastr.error('başarısız')}
    })
  }
}
