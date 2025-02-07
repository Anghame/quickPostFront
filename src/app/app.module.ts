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

import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  const timestamp = new Date().getTime();
  return new TranslateHttpLoader(http, '../assets/i18n/',  `.json?v=${timestamp}`);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SharedModule,
   //  AuthModule ,
     HttpClientModule,
     PostsModule,
     LayoutModule,
     TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: createTranslateLoader,
         deps: [HttpClient],
       },
     }),
     //PostsRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
