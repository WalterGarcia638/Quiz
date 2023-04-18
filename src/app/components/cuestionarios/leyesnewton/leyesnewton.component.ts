import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leyesnewton',
  templateUrl: './leyesnewton.component.html',
  styleUrls: ['./leyesnewton.component.css']
})
export class LeyesnewtonComponent implements OnInit {

  respuetaEnviada: any
  numeroPregunta: any = 1;
  puntaje: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  
  cambiarCheck(event: any){
    //this.respuetaEnviada = event.target.defaultValue;
    //console.log(this.respuetaEnviada)
    console.log("ahora con el boton",event)
    this.respuetaEnviada = event

  }
  validarRespueta(){
    console.log(this.respuetaEnviada)

    if(this.numeroPregunta == 1){
      
      if(this.respuetaEnviada == 1 ){
        console.log("respuesta correcta")
        this.puntaje += 1;        
      }
      else{
        console.log("respuesta incorrecta")
      }
    }

    if(this.numeroPregunta == 2){
      
      if(this.respuetaEnviada == 2 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    }   

    if(this.numeroPregunta == 3){
      
      if(this.respuetaEnviada == 4 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    } 

    if(this.numeroPregunta == 4){
      
      if(this.respuetaEnviada == 1 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    } 

    if(this.numeroPregunta == 5){
      
      if(this.respuetaEnviada == 4 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    } 

    if(this.numeroPregunta == 6){
      
      if(this.respuetaEnviada == 3 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    } 

    if(this.numeroPregunta == 7){
      
      if(this.respuetaEnviada == 1 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    } 

    if(this.numeroPregunta == 8){
      
      if(this.respuetaEnviada == 2 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    }

    if(this.numeroPregunta == 9){
      
      if(this.respuetaEnviada == 3 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    }

    if(this.numeroPregunta == 10){
      
      if(this.respuetaEnviada == 1 ){
        console.log("respuesta correcta")
        this.puntaje += 1;
      }
      else{
        console.log("respuesta incorrecta")
      }
    }

    this.numeroPregunta += 1    
  }
}
