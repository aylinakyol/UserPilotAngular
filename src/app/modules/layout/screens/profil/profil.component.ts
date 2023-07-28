import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user-request';
import { UserResult } from 'src/app/models/user-result';
import { KullaniciService } from 'src/app/services/kullanici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit{
  url: any
  user1: UserModel
  a:any
  
  profileForm = new FormGroup({
    Adi: new FormControl(''),
    Soyadi: new FormControl(''),
    Eposta: new FormControl(''),
    CepTelefon: new FormControl('')
  });
  ngOnInit(): void {
    this.kullaniciService.GetUser().subscribe((data)=>
    this.profileForm.patchValue(data)
    )
  }
  constructor(private router : Router,private route: ActivatedRoute, private kullaniciService: KullaniciService,private toastr :ToastrService){
  }
  selectedFile: File;
 onSelectFile(event:any){
  const request1:UserResult=Object.assign(new UserResult(),this.profileForm.value);
  this.url=<File>event.target.files[0];
  let fileReader :FileReader= new FileReader();
  fileReader.readAsText(this.url);
  request1.DosyaBase64=this.url;
  this.kullaniciService.Profile(request1).subscribe((data)=>{
    console.log(data.Description);
  })
 }
  updateUser(){
    const request:UserResult=Object.assign(new UserResult(),this.profileForm.value);

    this.kullaniciService.UpdateProfile(request)
    .subscribe((result)=>{
      console.log(result);
      if(result.Successful)
      this.toastr.success('başarılı');
      else{
      this.toastr.error('başarısız')}
    })
  }
}
