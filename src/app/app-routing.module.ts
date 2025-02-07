import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, // Lazy loading du module Auth
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirection par défaut
 // Page 404
  { path: 'posts',
  canActivate: [authGuard], loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule) }, 
  { path: '**', redirectTo: '/auth/login' },// Lazy loading pour le module Posts
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
