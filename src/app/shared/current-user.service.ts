import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  profilePicture: string | null = './images/defaultavatar.png'

  constructor() { }
}
