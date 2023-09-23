import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { SeePostComponent } from './components/see-post/see-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import {MatIconModule} from "@angular/material/icon";
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { ChatsComponent } from './components/chats/chats.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    EditProfileComponent,
    WelcomeComponent,
    ListPostsComponent,
    SeePostComponent,
    CommentsComponent,
    SeeProfileComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
