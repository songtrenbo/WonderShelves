import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isChecked: boolean = false;
  user: User = new User();
  constructor(private userService: UserService, private router: Router) {}


  ngOnInit(): void {

  }


  login(): void {
    var token;
    console.log(this.user.email)
    console.log(this.user.password)
    this.userService.login(this.user).subscribe(
      (response) => {
        token = response;
        const tokenInfo = this.userService.getDecodedAccessToken(token);
        console.log((tokenInfo));
        localStorage.setItem('Token', token);
        if(tokenInfo.role === "Admin"){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/home']);
        }
      },
      (error) => {        
        Swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: 'Wrong email or password!'
        })
      }
    );
  }
}
