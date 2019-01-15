import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.less']
})
export class MaincontentComponent implements OnInit {

  constructor(private auth: AuthService, private http: Http) { }

  ngOnInit() {
    if (sessionStorage.getItem("adal.access.token.keyhttps://graph.microsoft.com") == null) {
      this.auth.GetUserToken("https://graph.microsoft.com").subscribe(res => {
        if (res != null) {
          localStorage.setItem('pocgraph', res.toString());
          console.log('graph token success');
          this.http.get("https://graph.microsoft.com/v1.0/me/memberOf", {
            headers: new Headers({ "Authorization": "Bearer " + localStorage.getItem('pocgraph') })
          }).subscribe(res => {
            if (res.status == 200) {

              console.log(res.json());
            }
          });
        } else {
          console.log(localStorage.getItem('pocgraph'));
        }
      });
    } else {
      this.auth.RefreshUserToken("https://graph.microsoft.com")
    }

  }

}


