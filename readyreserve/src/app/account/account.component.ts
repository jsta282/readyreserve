import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private http: Http) { }

  displayName: string;
  group: string;
  groups: JSON;
  groupJSON: JSON;
  securityGroups: JSON;
  securityGroup: string;

  ngOnInit() {
    this.http.get("https://graph.microsoft.com/v1.0/me/memberOf", {
        headers: new Headers({ "Authorization": "Bearer " + localStorage.getItem('pocgraph') })
      }).subscribe(res => {
        if (res.status == 200) {
          this.groupJSON = res.json();
          this.groups = this.groupJSON["value"];
          this.group = this.groups[0];
          this.displayName = this.group["displayName"];

          console.log(res.json());
          console.log("You belong to this: " + this.displayName);
        }
      });
    
  }

  accountsubmit() {
    this.http.get("https://graph.microsoft.com/v1.0/groups", {
        headers: new Headers({ "Authorization": "Bearer " + localStorage.getItem('pocgraph') })
      }).subscribe(res => {
        if (res.status == 200) {
          this.securityGroups = res.json(); 
          this.securityGroup = this.securityGroups["value"];
          console.log(res.json());
          //console.log("These are the groups available: " + JSON.parse(this.securityGroup[0]).displayName), this.securityGroup[1], this.securityGroup[2]);
        }
      });


  }

}
