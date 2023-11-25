import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {SeePostComponent} from "./components/see-post/see-post.component";
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {ForumListComponent} from "./components/forum-list/forum-list.component";
import {ForumSeeComponent} from "./components/forum-list/forum-see/forum-see.component";
import {PublishPropertyComponent} from "./components/publish-property/publish-property.component";
import {SeeMessagesComponent} from "./components/see-messages/see-messages.component";
import {SeeProfileComponent} from "./components/see-profile/see-profile.component";
import {PropertyFormComponent} from "./components/edit-profile/tables/your-properties/property-form/property-form.component";
import {LoginComponent} from "./components/login/login.component";
import {YourPostsComponent} from "./components/edit-profile/tables/your-posts/your-posts.component";
import {
  YourPropertiesComponent
} from "./components/edit-profile/tables/your-properties/your-properties.component";
import {
  ReservationsComponent
} from "./components/edit-profile/tables/reservations/reservations.component";
import {
  YourClientsComponent
} from "./components/edit-profile/tables/your-clients/your-clients.component";

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'welcome', component:WelcomeComponent},
  {path: 'my-profile', component:EditProfileComponent},
  {path: 'see-profile/:id', component:SeeProfileComponent},
  {path: 'list-posts', component:ListPostsComponent},
  {path: 'see-post/:id', component:SeePostComponent},
  {path: 'forum-questions', component:ForumListComponent},
  {path: 'forum-answer/:id', component:ForumSeeComponent},
  {path: 'add-post', component:PublishPropertyComponent},
  {path: 'messages', component:SeeMessagesComponent},
  {path: 'register-property', component:PropertyFormComponent},
  {path: 'your-properties/:id', component:YourPropertiesComponent},
  {path: 'your-posts/:id', component:YourPostsComponent},
  {path: 'reservations', component:ReservationsComponent},
  {path: 'your-clients', component:YourClientsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
