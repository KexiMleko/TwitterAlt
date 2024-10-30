import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonService } from '../shared/common.service';
import { PostService } from '../shared/post.service';
import { CurrentUserService } from '../shared/current-user.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,MatIcon],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  post:any

  constructor(public commonService:CommonService,public postService:PostService,public currentUser:CurrentUserService){

  }

  ngOnInit(): void {
    if (this.postService.openedPost != null || this.postService.openedPost != undefined) {
      sessionStorage.setItem('openedPost', JSON.stringify(this.postService.openedPost));
    }
  
    const postString = sessionStorage.getItem('openedPost');
    if (postString) {
      this.post = JSON.parse(postString);
    }
  
    console.log(this.post);
  }
}
