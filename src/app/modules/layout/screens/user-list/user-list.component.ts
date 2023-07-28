import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileAuthServiceService } from 'src/app/kullanici/kullanici/auth-service';
import { UserModel } from 'src/app/models/user-request';
import { UserResult } from 'src/app/models/user-result';
import { KullaniciService } from 'src/app/services/kullanici.service';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { PagingResult } from 'src/app/models/paging-result';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: UserModel[] = [];
  page: number = 0;
  count: number = 0;
  tableSize: number=10;
  tableSizes: any = [5, 10, 25, 100];
  public users: UserModel[] = [];
  displayVal = ' ';
  public user: UserModel;
  searchForm = new FormGroup({
    Adi: new FormControl(''),
    Soyadi: new FormControl(''),
    Eposta: new FormControl('')
  })
  constructor(
    private profileauthService: ProfileAuthServiceService,
    private kullaniciService: KullaniciService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  getUsers() { // UPDATE: Give this a proper name.
    this.profileauthService.getUsers(this.page,this.tableSize)
      .subscribe((result) => {
        this.userList = result.Data;
      });
  }

  GetSingle(data: string) {
    var numberValue = Number(data);
    this.kullaniciService.GetSingle(numberValue).subscribe((response: UserModel) => this.user = response);
  }
  SearchData() {
    const request: UserResult = Object.assign(new UserResult(), this.searchForm.value);
    this.kullaniciService.searchUser(request,this.page,this.tableSize)
      .subscribe((result) => {
        console.log(result.Description);
        this.userList = result.Data;
      })
  }
  Remove(user: UserModel) {
    let text = "Bu kullanıcıyı silmek istediğine emin misin?";
    const indexOfDeletedUser = this.userList.findIndex(t => t.KullaniciId === user.KullaniciId)

    if (!confirm(text)) {
      window.alert("kullanıcı silinemedi");
      return;
    }
    this.kullaniciService.RemoveUser(user.KullaniciId)
      .subscribe((result) => {
        if(!result.Successful) {
          window.alert(result.Description);
          return;
        }
        this.userList = this.userList.filter(t => t.KullaniciId !== user.KullaniciId);
        console.log(result.Description);
      });
  }
  Update(user: UserModel) {
    this.router.navigate(['/app/update', user.KullaniciId])
  }
  navigate(data: string) {
    this.router.navigate([data])
  }
  onPageChange($event: PageEvent) {
    this.page = $event.pageIndex;
    this.tableSize= $event.pageSize;
    this.getUsers();
    this.SearchData();
    console.log($event);
  }
  ngOnInit() {
    this.getUsers();
    this.SearchData();
  }
}