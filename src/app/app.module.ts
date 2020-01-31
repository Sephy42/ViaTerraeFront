import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicService } from './core/services/public.service';
import { UserService } from './core/services/user.service';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { OrderService } from './core/services/order.service';
import { TokenInterceptor } from './core/guards/token-interceptor';
import { JWTInterceptor } from './core/guards/jwtinterceptor';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    AccueilComponent,
    RegisterComponent,
    MenuComponent,


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
  providers: [PublicService,UserService, OrderService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
