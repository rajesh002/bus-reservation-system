import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AddbusComponent } from './addbus/addbus.component';
import { AvailablebusesComponent } from './availablebuses/availablebuses.component';
import { TimingComponent } from './timing/timing.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'addbus', component: AddbusComponent },
  { path: 'buses', component: AvailablebusesComponent },
  { path: 'customerview', component: CustomerviewComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'availablebuses', component: AvailablebusesComponent },
  { path: 'addtimings', component: TimingComponent },
  { path: 'update/:id', component: UpdatebusComponent },
  { path: 'busdetails/:id', component: BusdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
