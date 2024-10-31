import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private router: Router) { }

  featuredPosts!: {
    username: string,
    userPfp?: string,
    text: string,
    images: string[],
    uploadTime: Date,
    likeCount: number,
    shareCount: number,
    isLiked: boolean,
    comments: {
      username: string,
      userPfp?: string,
      uploadTime: Date,
      text: string,
      likeCount: number,
      isLiked: boolean,
      repliesToggled:boolean
      replies: {
        username: string,
        userPfp?: string,
        uploadTime: Date,
        text: string,
        likeCount: number,
        isLiked: boolean,
      }[]
    }[],
  }[]

  openedPost: any

  openPost(post: any) {
    this.openedPost = post
    this.router.navigate(['/post'])
  }

  getTopComments(comments: any[], comNumber: number) {
    const nonReplyComments = comments.filter((comment) => comment.repliedTo == null || undefined || '')
    const sortedComments = comments.sort((a, b) => b.likeCount - a.likeCount);
    return sortedComments.slice(0, comNumber);
  }

  displayReplies(comment:any){
    comment.repliesToggled=!comment.repliesToggled
  }

}
