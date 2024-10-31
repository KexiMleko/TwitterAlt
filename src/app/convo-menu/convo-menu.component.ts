import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convo-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './convo-menu.component.html',
  styleUrl: './convo-menu.component.scss'
})
export class ConvoMenuComponent implements OnInit {
  profilePicture: string | null = './images/defaultavatar.png'
  conversations: {
    name: string,
    convoImg?: string
  }[] = [{ name: 'thisConvo' }]

  groupChats: {
    name: string,
    convoImg?: string
  }[] = [{ name: 'myGroup' }]

  newPeople: {
    name: string,
    convoImg?: string
  }[] = [{ name: 'thisRandom Guy' }, { name: 'thisRandom Guy' }, { name: 'thisRandom Guy' }]

  imgCheck(img: string | undefined) {
    if (img == null || '' || undefined) {
      img = './images/defaultavatar.png'
    }
    return img
  }

  ngOnInit(): void {

    //fetching simulation

    // this.http.get(url+'/Conversations').subscribe(
    //   {
    //     next: (res: any) => conversations = res,
    //     error: (err) => console.log(err)
    //   }
    // this.http.get(url+'/GroupChats').subscribe(
    //   {
    //     next: (res: any) => groupChats = res,
    //     error: (err) => console.log(err)
    //   }
    //this.http.get(url+'/NewPeople').subscribe(
    //   {
    //     next: (res: any) => newPeople = res,
    //     error: (err) => console.log(err)
    //   }
    // )
  }
}

