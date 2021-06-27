import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any =  {};
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }
  Login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, errorobj => {
      console.log(errorobj);
    });
  }

  Loggedout(){
    this.accountService.logout();
  }
}
