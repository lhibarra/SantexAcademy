import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario/ver-usuario.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {path:"", component: DashboardComponent, 
  canActivate: [AuthGuard], 
  children:[
    {path:"", component: InicioComponent},
    {path:"usuarios", component: UsuariosComponent},
    {path:"encuesta", component: EncuestaComponent},
    {path:"crear-usuario", component: CrearUsuarioComponent},
    {path: "search-user", component:  VerUsuarioComponent},
    {path: "edit-user/:id", component: CrearUsuarioComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
