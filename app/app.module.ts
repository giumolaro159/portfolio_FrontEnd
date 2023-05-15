import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    NgCircleProgressModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
