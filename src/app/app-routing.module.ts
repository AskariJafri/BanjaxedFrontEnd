import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ListComponent } from './list/list.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"list",component:ListComponent},
  {path:"profile",component:ProfileComponent},
  {path:"tutorials",component:TutorialsComponent},
  {path:"community",component:CommunityComponent},
  {path:"lessons",component:LessonsComponent},


  // {path:"main",component:MainContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
