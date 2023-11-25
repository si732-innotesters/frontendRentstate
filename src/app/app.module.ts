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
import {ForumSeeComponent} from "./components/forum-list/forum-see/forum-see.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { SeePostComponent } from './components/see-post/see-post.component';
import { CommentsComponent} from "./components/see-post/comments/comments.component";
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { ChatsComponent } from './components/see-messages/chats/chats.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SeeMessagesComponent } from './components/see-messages/see-messages.component';
import { PropertyFormComponent } from './components/edit-profile/tables/your-properties/property-form/property-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { PublishPropertyComponent } from './components/publish-property/publish-property.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SubscribeComponent } from './components/edit-profile/subscribe/subscribe.component';
import { YourPropertiesComponent } from './components/edit-profile/tables/your-properties/your-properties.component';
import { YourPostsComponent } from './components/edit-profile/tables/your-posts/your-posts.component';
import { ReservationsComponent } from './components/edit-profile/tables/reservations/reservations.component';
import { YourClientsComponent } from './components/edit-profile/tables/your-clients/your-clients.component';
import {JwtInterceptor} from "./public/shared/services/JwtInterceptor/JwtInterceptor";



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
    PublishPropertyComponent,
    LoginComponent,
    HomeComponent,
    SubscribeComponent,
    YourPropertiesComponent,
    YourPostsComponent,
    ReservationsComponent,
    YourClientsComponent,
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
    MatSelectModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
