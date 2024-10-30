import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
profilePicture:string|null='./images/defaultavatar.png'
constructor(private router:Router){

}

home(){
  this.router.navigate(['/home'])
}
}
