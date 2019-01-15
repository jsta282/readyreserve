import { Injectable } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private adal: AdalService) {
    this.adal.init({
      tenant: environment.adal.tenant,
      clientId: environment.adal.clientId,
      redirectUri: environment.adal.redirectUri,
      postLogoutRedirectUri: window.location.origin,
      endpoints: {
        graphApiUri: "https://graph.microsoft.com",
      },
      popUp: false,
    });

  }

  public Login(): void {
    if (this.adal.userInfo.authenticated === false) {
      this.adal.login();
      
    }
  }

  public Logout(): void {
    this.adal.logOut();
  }

  public IsAuthenticated(): boolean {
    console.log('IsAuthenticated');
    console.log('this.adal: ' + this.adal);
    console.log('this.adal.userInfo: ' + this.adal.userInfo);
    console.log('this.adal.userInfo.authenticated: ' + this.adal.userInfo.authenticated);
    return this.adal.userInfo.authenticated;
    
  }

  public HandleWindowCallback(): void {
    this.adal.handleWindowCallback();
  }

  public RefreshUserToken(resource) {
    this.adal.clearCacheForResource(resource);
  }
  
  public GetUserToken(resource): Observable<String | null> {
    return this.adal.acquireToken(resource);
  }


}
