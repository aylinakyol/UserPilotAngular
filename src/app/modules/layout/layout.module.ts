import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserListComponent } from './screens/user-list/user-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateComponent } from './screens/update/update.component';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
import { ProfilComponent } from './screens/profil/profil.component';
import { NewUserComponent } from './screens/new-user/new-user.component';
import { ChangePasswordComponent } from './screens/change-password/change-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    LayoutComponent,
    UserListComponent,
    DashboardComponent,
    UpdateComponent,
    ProfilComponent,
    NewUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    NgxPaginationModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
