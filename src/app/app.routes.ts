import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
},
{
    path: 'home', component: HomeComponent
},
{
    path: 'post', component: PostComponent
},
{
    path: '**', redirectTo: '/home'
}
];
