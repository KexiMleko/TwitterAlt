import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonService } from '../shared/common.service';
import { PostService } from '../shared/post.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  profilePicture: string | null = './images/defaultavatar.png'


  constructor(public commonService: CommonService, public postService: PostService, private http: HttpClient) {

  }

  ngOnInit(): void {

    //fetch simulation

    // this.http.get(environment.url+'/Featured_Posts').subscribe(
    //   {
    //     next: (res: any) => this.postService.featuredPosts = res,
    //     error: (err) => console.log(err)
    //   }
    // )

    this.postService.featuredPosts = [
      {
        username: "john_doe",
        userPfp: "https://example.com/images/john.jpg",
        text: "Enjoying the great outdoors!",
        images: [
          "https://i.ibb.co/rwr9QB0/pizza.jpg",
          "https://i.ibb.co/rwr9QB0/pizza.jpg"
        ],
        uploadTime: new Date("2021-10-11T11:30:00"),
        likeCount: 230,
        shareCount: 10,
        isLiked: false,
        comments: [
          {
            username: "MirkoSvemirko",
            uploadTime: new Date("2024-10-01T12:11:00"),
            text: "bastardsss!",
            likeCount: 3,
            isLiked: false,
            repliesToggled: false,
            replies: [
              {
                username: "john_doe",
                uploadTime: new Date("2024-10-01T12:15:00"),
                text: "Let's keep it friendly!",
                likeCount: 1,
                isLiked: false,
                repliedTo:'MirkoSvemirko'
              },
              {
                username: "john_doe",
                uploadTime: new Date("2024-10-01T12:15:00"),
                text: "eyyy",
                likeCount: 1,
                isLiked: false,
                repliedTo:'MirkoSvemirko'
              }
            ]
          },
          {
            username: "jane_smith",
            userPfp: "https://example.com/images/jane.jpg",
            uploadTime: new Date("2021-10-11T11:30:00"),
            text: "Looks amazing!",
            likeCount: 15,
            isLiked: false,
            repliesToggled: false,
            replies: []
          },
          {
            username: "jack_brown",
            uploadTime: new Date("2024-10-01T12:10:00"),
            text: "I'd love to visit this place!",
            likeCount: 8,
            isLiked: false,
            repliesToggled: false,
            replies: []
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
        username: "alice_1990",
        text: "What a day! #sunset",
        images: ['https://i.ibb.co/rwr9QB0/pizza.jpg', 'https://i.ibb.co/rwr9QB0/pizza.jpg', 'https://i.ibb.co/rwr9QB0/pizza.jpg', 'https://i.ibb.co/rwr9QB0/pizza.jpg', 'https://i.ibb.co/rwr9QB0/pizza.jpg', 'https://i.ibb.co/rwr9QB0/pizza.jpg'],
        uploadTime: new Date('2024-10-02T18:40:00'),
        likeCount: 120,
        shareCount: 5,
        isLiked: false,
        comments: []
      }
    ];
  }
}
