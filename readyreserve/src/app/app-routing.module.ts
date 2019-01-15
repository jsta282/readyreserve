import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './services/authguard.service';
import { AdalGuard } from 'adal-angular4';
import { AccountComponent } from './account/account.component';

const routes: Routes = [{
  path: 'home',
  component: MaincontentComponent,
  canActivate: [AdalGuard],
  children: [
    {
      path: 'reports',
      component: AdduserComponent
    }],
},
{ path: 'account', component: AccountComponent },
{ path: 'adduser', component: AdduserComponent },
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
