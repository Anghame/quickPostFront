import { Component } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { ToasterService } from '../../../../shared/services/toaster.service';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
  content: string = '';
  authorId=''
  posts: any[] = []; 
  user :any = ''

  constructor(private postService: PostService, private toasterService: ToasterService,) {
   
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      this.authorId=this.user._id
    }
  
  }

  ngOnInit(): void {
    this.loadPosts(); 
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data; 
      },
      (error) => {
        console.error('Erreur lors du chargement des posts:', error);
      }
    );
  }

  postPublication(): void {
    if (this.content && this.content.length <= 280) {
      this.postService.createPost(this.content, this.authorId).subscribe(
        (response) => {
          this.toasterService.showToast('publication  ajoutée avec succée !', 'success');

       
          this.content = ''; 
          this.loadPosts(); 
        },
        (error) => {
          this.toasterService.showToast('Erreur lors de l\'ajout de la publication  !', 'error');

        }
      );
    } 
  }

  likePost(postId: string): void {
    this.postService.likePost(postId, this.authorId).subscribe(
      (response) => {
        console.log('Post liké avec succès :', response);
        this.loadPosts();
      },
      (error) => {
        console.error('Erreur lors du like:', error);
      }
    );
  }

  addComment(postId: string, commentContent: string): void {
    if (commentContent.trim()) {
      this.postService.addComment(postId, commentContent, this.authorId).subscribe(
        (response) => {
          this.toasterService.showToast('Commentaire ajouté avec succès!', 'success');
          this.loadPosts(); 
        },
        (error) => {
          this.toasterService.showToast('Erreur lors de l\'ajout du commentaire:', 'error');

        }
      );
    }
  }
  
}
