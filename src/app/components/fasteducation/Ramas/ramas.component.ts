import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
@Component({
  selector: 'app-ramas',
  templateUrl: './ramas.component.html',
  styleUrls: ['./ramas.component.css']
})
export class RamasComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ramas:any=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      fetch(`https://project-fast-education.herokuapp.com/api/ramas/${id}`).then((response)=>{
        return response.json()
      }).then(data=>{
        this.ramas=data
        console.log(data)
      })
    })

  }

}
