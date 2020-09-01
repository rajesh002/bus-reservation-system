import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AddbusComponent } from './addbus/addbus.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { AvailablebusesComponent } from './availablebuses/availablebuses.component';
import { TimingComponent } from './timing/timing.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { TokenInterceptor } from '../app/auth/token.interceptor';
import { UpdatebusComponent } from './updatebus/updatebus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddbusComponent,
    AdminComponent,
    ReservationComponent,
    BusdetailsComponent,
    AvailablebusesComponent,
    TimingComponent,
    CustomerviewComponent,
    UpdatebusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
