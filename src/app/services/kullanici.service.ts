import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/loginresponse';
import { UserModel } from '../models/user-request';
import { Dresult } from '../models/d-result';
import { UserResult } from '../models/user-result';
import { PagingResult } from 'src/app/models/paging-result';
import { PasswordRequest } from '../models/passwordrequest';
import { ProfileGet } from '../models/profile-get';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private readonly http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://dfsrv.larinsoft.com/kullanici/login', loginRequest);
  }
  createUser(userRequest: UserModel): Observable<Dresult> {
    return this.http.post<Dresult>('https://dfsrv.larinsoft.com/kullanici', userRequest);
  }
  getUser(userRequest: UserResult): Observable<PagingResult<UserModel>> {
    return this.http.get<PagingResult<UserModel>>('https://dfsrv.larinsoft.com/Kullanici/userget');
  }
  GetSingle(id: number) {
    return this.http.get<UserModel>("https://dfsrv.larinsoft.com/kullanici/" + id);
  }
  searchUser(userRequest: UserResult, page:any,tableSize:any):Observable<PagingResult<UserModel>>{
    return this.http.get<PagingResult<UserModel>>("https://dfsrv.larinsoft.com/Kullanici?Adi="+userRequest.Adi+"&Soyadi="+userRequest.Soyadi+"&Eposta="+userRequest.Eposta+"&SayfaNo="+page+"&SayfaBasinaKayitSayisi="+tableSize);
  }
  forgotPassword(data:any): Observable<Dresult> {
    return this.http.post<Dresult>("https://dfsrv.larinsoft.com/Kullanici/forgot-password",data);
  }
  RemoveUser(id:number):Observable<Dresult>{
    return this.http.delete<Dresult>("https://dfsrv.larinsoft.com/Kullanici/"+id)
  }
  UpdateUser(updateRequest:UserModel):Observable<Dresult>{
    return this.http.post<Dresult>("https://dfsrv.larinsoft.com/Kullanici",updateRequest);
  }
  UpdateProfile(updateRequest:UserResult):Observable<Dresult>{
    return this.http.post<Dresult>("https://dfsrv.larinsoft.com/Kullanici/kisiselbilgidegistir",updateRequest);
  }
  ChangePassword(data:any):Observable<Dresult>{
    return this.http.post<Dresult>("https://dfsrv.larinsoft.com/Kullanici/Sifredegistir",data);
  }
  GetUser():Observable<UserModel>{
    return this.http.get<UserModel>("https://dfsrv.larinsoft.com/Kullanici/userget");
  }
  Profile(data:any):Observable<ProfileGet>{
    return this.http.post<ProfileGet>("https://dfsrv.larinsoft.com/Kullanici/resim",data);
  }
}
