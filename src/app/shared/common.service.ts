import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  imgCheck(img: string | undefined) {
    if (img == null || '' || undefined) {
      img = './images/defaultavatar.png'
    }
    return img
  }

  likeContent(content: any): void {
    content.likeCount++
    content.isLiked = !content.isLiked;
  }

  timeAgo(date: string | Date): string {
    // Check if the date is a string; if so, parse it to a Date object
    if (typeof date === 'string') {
      date = new Date(date);
    }

    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1
    };

    for (const [unit, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count >= 1) {
        if (unit === "second" && count < 60) return "just now";
        return count === 1 ? `1 ${unit} ago` : `${count} ${unit}s ago`;
      }
    }

    return "just now";
  }

  openUser() { }
}
