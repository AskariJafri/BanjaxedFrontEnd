import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { CardGroupComponent } from './card-group/card-group.component';
import { ProfileComponent } from './profile/profile.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { CommunityComponent } from './community/community.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    BannerComponent,
    MainContainerComponent,
    CarouselContainerComponent,
    InfoCardComponent,
    FooterComponent,
    NavbarComponent,
    CardGroupComponent,
    ProfileComponent,
    TutorialsComponent,
    CommunityComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule,
    NgbModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
