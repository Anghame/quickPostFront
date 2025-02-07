import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    AddPostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,FormsModule
  ]
})
export class PostsModule { }
