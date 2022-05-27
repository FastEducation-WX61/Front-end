import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  video:any={} ;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      fetch(`https://project-fast-education.herokuapp.com/api/videos/clase/${id}`).then((response)=>{
        return response.json()
      }).then(data=>{
        this.video=data
        console.log(data)
      })
    })
  }

}
