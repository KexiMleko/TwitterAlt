import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-convo-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convo-menu.component.html',
  styleUrl: './convo-menu.component.scss'
})
export class ConvoMenuComponent {
  profilePicture: string | null = './images/defaultavatar.png'
  conversations: [{
    name: string,
    convoImg?: string
  }] = [{name:'thisConvo'}]

  groupChats: [{
    name: string,
    convoImg?: string
  }] = [{name:'myGroup'}]

  newPeople: [{
    name: string,
    convoImg?: string
  }] = [{name:'thisRandom Guy'}]

  imgCheck(img:string|undefined){
    if(img==null||''||undefined){
      img='./images/defaultavatar.png'
    }
    return img
  }
}

