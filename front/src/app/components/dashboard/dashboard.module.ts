import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompartidaModule } from '../compartida/compartida.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ExpansionComponent } from './encuesta/expansion/expansion.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario/ver-usuario.component';
import { LogoutConfirmationComponent } from './navbar/logout-confirmation/logout-confirmation.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChangePasswordComponent } from './usuarios/change-password/change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SurveyListComponent } from './survey-list/survey-list.component'; //jz
import { VerEncuestaComponent } from './encuesta/ver-encuesta/ver-encuesta.component';
import { VistaChartComponent } from './charts/vista-chart/vista-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component'; //jz
import { PieOtherChartComponent } from './charts/pie-chart/pie-hospedaje-chart.component';
import { PieHospedajeRatingChartComponent } from './charts/pie-chart/pie-hospedaje-rating-chart.component';
import { PieOficinaRatingChartComponent } from './charts/pie-chart/pie-oficina-rating-chart.component';
import { BarGroupChartComponent } from './charts/bar-group-chart/bar-group-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    EncuestaComponent,
    CrearUsuarioComponent,
    ExpansionComponent,
    VerUsuarioComponent,
    LogoutConfirmationComponent,
    BarChartComponent,
    ChangePasswordComponent,
    SurveyListComponent, 
    VerEncuestaComponent,
    VistaChartComponent, 
    PieChartComponent, 
    PieOtherChartComponent,
    PieHospedajeRatingChartComponent,
    PieOficinaRatingChartComponent,
    BarGroupChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidaModule,
    MatDialogModule,
    NgxChartsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
