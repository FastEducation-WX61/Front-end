import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  cursos:any=[];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      fetch(`https://project-fast-education.herokuapp.com/api/cursos/${id}`).then((response)=>{
        return response.json()
      }).then(data=>{
        this.cursos=data
        console.log(data)
      })
    })

  }

}
