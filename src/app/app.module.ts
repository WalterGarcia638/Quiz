import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CuestionariosComponent } from './components/cuestionarios/cuestionarios.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { TemasComponent } from './components/temas/temas.component';
import { GaussComponent } from './components/cuestionarios/gauss/gauss.component';
import { LeyesnewtonComponent } from './components/cuestionarios/leyesnewton/leyesnewton.component';
import { LeycoulombComponent } from './components/cuestionarios/leycoulomb/leycoulomb.component';
import { CapacitanciaComponent } from './components/cuestionarios/capacitancia/capacitancia.component';
import { NewtonComponent } from './components/informaciones/newton/newton.component';
import { CoulombComponent } from './components/informaciones/coulomb/coulomb.component';
import { InfoCapacitanciaComponent } from './components/informaciones/info-capacitancia/info-capacitancia.component';
import { CampoelectricoComponent } from './components/informaciones/campoelectrico/campoelectrico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CuestionariosComponent,
    JuegosComponent,
    TemasComponent,
    GaussComponent,
    LeyesnewtonComponent,
    LeycoulombComponent,
    CapacitanciaComponent,
    NewtonComponent,
    CoulombComponent,
    InfoCapacitanciaComponent,
    CampoelectricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
