import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { AuthService } from './services/auth.service';
import { AdalService, AdalGuard } from 'adal-angular4';
import { AccountComponent } from './account/account.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdduserComponent,
    LoginComponent,
    MaincontentComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
