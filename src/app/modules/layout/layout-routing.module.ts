import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './screens/user-list/user-list.component';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { UpdateComponent } from './screens/update/update.component';
import { RemindPasswordComponent } from '../auth/screens/sign-in/remind-password/remind-password.component';
import { ProfilComponent } from './screens/profil/profil.component';
import { NewUserComponent } from './screens/new-user/new-user.component';
import { ChangePasswordComponent } from './screens/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'kullanicilar',
        component: UserListComponent
      },
      {
        path: 'update/:id',
        component: UpdateComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'kullanici',
        component: ProfilComponent
      },
      {
        path: 'user',
        component: NewUserComponent
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
