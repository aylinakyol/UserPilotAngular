import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public SaveData(key : string, value : string){
    localStorage.setItem(key,value);
  }

  public getData(key : string){
    return localStorage.getItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public SaveToken(value : string){
    localStorage.setItem('token',value);
  }

  public getToken(){
    return localStorage.getItem('token');
  }
  
}
