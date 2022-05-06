import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  rutas:any=[];
  ngOnInit():  void {
   fetch("https://project-fast-education.herokuapp.com/api/rutas").then((response)=>{
     return response.json()
   }).then(data=>{
     this.rutas=data
       console.log(data)
   })

  }

}
