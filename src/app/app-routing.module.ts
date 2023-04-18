import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TemasComponent } from './components/temas/temas.component';
import { CuestionariosComponent } from './components/cuestionarios/cuestionarios.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { GaussComponent } from './components/cuestionarios/gauss/gauss.component';
import { LeyesnewtonComponent } from './components/cuestionarios/leyesnewton/leyesnewton.component';
import { LeycoulombComponent } from './components/cuestionarios/leycoulomb/leycoulomb.component';
import { CapacitanciaComponent } from './components/cuestionarios/capacitancia/capacitancia.component';
import { NewtonComponent } from './components/informaciones/newton/newton.component';
import { CoulombComponent } from './components/informaciones/coulomb/coulomb.component';
import { InfoCapacitanciaComponent } from './components/informaciones/info-capacitancia/info-capacitancia.component';
import { CampoelectricoComponent } from './components/informaciones/campoelectrico/campoelectrico.component';

const routes: Routes = [
{
  path:'Inicio', component: InicioComponent
},

{
  path:'Temas', component: TemasComponent
},

{
  path:'Cuestionarios', component: CuestionariosComponent
},

{
  path:'Juegos', component: JuegosComponent
},
{
  path:'cuestionarioGauss', component: GaussComponent
},
{
  path:'leyesNewton', component: LeyesnewtonComponent
},
{
  path:'leyeCoulomb', component: LeycoulombComponent
},
{
  path:'capacitancia', component: CapacitanciaComponent
},
{
  path:'infoNewton', component: NewtonComponent
},
{
  path:'infoCoulomb', component: CoulombComponent
},
{
  path:'infoCapacitancia', component: InfoCapacitanciaComponent
},
{
  path:'infoCampoElectrico', component:CampoelectricoComponent
},
{
  path:'**', pathMatch:'full', redirectTo:'Inicio'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
