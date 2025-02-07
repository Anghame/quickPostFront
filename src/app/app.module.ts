import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PostsRoutingModule } from './features/posts/posts-routing.module';
import { PostsModule } from './features/posts/posts.module';
import { authGuard } from './core/guards/auth.guard';

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SharedModule,

     HttpClientModule,
     PostsModule,
     LayoutModule,
  ],
  providers: [authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
