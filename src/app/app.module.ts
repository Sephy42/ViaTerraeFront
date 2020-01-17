import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { BasketComponent } from './basket/basket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicService } from './core/services/public.service';
import { UserService } from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    BasketComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PublicService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
