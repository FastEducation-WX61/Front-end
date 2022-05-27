import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';
@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  temas:any=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      fetch(`https://project-fast-education.herokuapp.com/api/videos/${id}`).then((response)=>{
        return response.json()
      }).then(data=>{
        this.temas=data
        console.log(data)
      })
    })
  }

}
