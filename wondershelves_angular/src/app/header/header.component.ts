import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tokenInfo: any;
  role: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    var tokenStr = localStorage.getItem('Token');
    this.tokenInfo = this.userService.getDecodedAccessToken(tokenStr!);
    if (this.tokenInfo != null) {
      this.role = this.tokenInfo.role;
    }
  }

}
