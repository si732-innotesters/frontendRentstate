import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import {ForumListComponent} from "./components/forum-list/forum-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {ForumSeeComponent} from "./components/forum-see/forum-see.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { SeePostComponent } from './components/see-post/see-post.component';
import { CommentsComponent} from "./components/see-post/comments/comments.component";
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { ChatsComponent } from './components/see-messages/chats/chats.component';
import {HttpClientModule} from "@angular/common/http";
import { SeeMessagesComponent } from './components/see-messages/see-messages.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { PublishPropertyComponent } from './components/publish-property/publish-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ForumListComponent,
    ForumSeeComponent,
    EditProfileComponent,
    WelcomeComponent,
    ListPostsComponent,
    SeePostComponent,
    CommentsComponent,
    SeeProfileComponent,
    ChatsComponent,
    SeeMessagesComponent,
    PropertyFormComponent,
    PublishPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
