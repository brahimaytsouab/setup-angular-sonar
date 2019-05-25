import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './services/posts.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyListMessageComponent } from './empty-list-message/empty-list-message.component';
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from './add-post/add-post.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./services/auth.service";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes= [
  { path: 'posts', canActivate: [AuthGuard], component: PostListComponent },
  { path: 'addPost', canActivate: [AuthGuard], component: AddPostComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuard], component: PostListComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    EmptyListMessageComponent,
    AddPostComponent,
    NotFoundPageComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [PostsService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
