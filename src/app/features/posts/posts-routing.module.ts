import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: '', component: ListPostsComponent }, // Route pour la liste des posts
  { path: 'add', component: AddPostComponent }, // Route pour ajouter un post
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
