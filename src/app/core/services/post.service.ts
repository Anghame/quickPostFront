import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = SERVER_BASE_URL
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // Créer un nouveau post
  createPost(content: string, authorId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, { content, authorId });
  }

  // Liker un post
  likePost(postId: string, userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/like`, { postId, userId });
  }

  // Ajouter un commentaire à un post
  addComment(postId: string, text: string, authorId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/comment`, { postId, text, authorId });
  }
}