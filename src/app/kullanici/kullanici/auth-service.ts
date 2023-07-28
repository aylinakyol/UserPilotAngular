import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user-request';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PagingResult } from 'src/app/models/paging-result';
@Injectable({
  providedIn: 'root'
})
export class ProfileAuthServiceService {

  constructor(private http:HttpClient, private readonly storageService: LocalStorageService) { }
  getUsers(data:number,pageSize:any):Observable<PagingResult<UserModel>>{
    return this.http.get<PagingResult<UserModel>>('https://dfsrv.larinsoft.com/Kullanici?SayfaNo='+data+'&SayfaBasinaKayitSayisi='+pageSize);
  }

  
}