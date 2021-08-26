import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DateCountPipe,
    FormComponent,
    HighlightDirective,
    PageNotFoundComponent,
    AboutpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }