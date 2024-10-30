import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonService } from '../shared/common.service';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  profilePicture: string | null = './images/defaultavatar.png'


  constructor(public commonService:CommonService,public postService:PostService){

  }

  ngOnInit(): void {
    this.postService.featuredPosts = [
      {
        username: "john_doe",
        userPfp: "https://example.com/images/john.jpg",
        text: "Enjoying the great outdoors!",
        images: [
          "https://example.com/images/mountain.jpg",
          "https://example.com/images/lake.jpg"
        ],
        uploadTime: new Date("2021-10-11T11:30:00"),
        likeCount: 230,
        shareCount: 10,
        isLiked: false,
        comments: [
          {
            username: "jane_smith",
            userPfp: "https://example.com/images/jane.jpg",
            uploadTime: new Date("2021-10-11T11:30:00"),
            text: "Looks amazing!",
            likeCount: 15,
            isLiked: false,
          },
          {
            username: "jack_brown",
            uploadTime: new Date("2024-10-01T12:10:00"),
            text: "I'd love to visit this place!",
            likeCount: 8,
            repliedTo: "jane_smith",
            isLiked: false,
          }
        ]
      },
      {
        username: "alice_1990",
        text: "What a day! #sunset",
        images: [''],
        uploadTime: new Date('2024-10-02T18:40:00'),
        likeCount: 120,
        shareCount: 5,
        isLiked: false,
        comments: []
      },
      {
        username: "michael_b",
        userPfp: "https://example.com/images/michael.jpg",
        text: "Just finished a 10k run!",
        images: [],
        uploadTime: new Date('2024-10-03T06:15:00'),
        likeCount: 300,
        shareCount: 20,
        isLiked: false,
        comments: [
          {
            username: "susan_w",
            userPfp: "https://example.com/images/susan.jpg",
            uploadTime: new Date("2024-10-03T07:20:00"),
            text: "Impressive, keep it up!",
            likeCount: 25,
            isLiked: false,
          }
        ]
      },
      {
        username: "chris_h",
        userPfp: "https://example.com/images/chris.jpg",
        text: "Coding all night #developerlife",
        images: [],
        uploadTime: new Date('2024-10-03T02:45:00'),
        likeCount: 200,
        shareCount: 12,
        isLiked: false,
        comments: []
      }
    ];
  }

  
}
