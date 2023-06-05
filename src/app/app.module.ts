import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarCompradorComponent } from './registrar-comprador/registrar-comprador.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrar-comprador', component: RegistrarCompradorComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent }
];

@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistrarCompradorComponent,
    InicioComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
