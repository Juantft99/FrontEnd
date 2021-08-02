import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activadetalle',
  templateUrl: './activadetalle.page.html',
  styleUrls: ['./activadetalle.page.scss'],
})
export class ActivadetallePage implements OnInit {
  farmacia;
  farmaciaid:String;

  constructor(
    private http: HttpClient, private activarRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.farmaciaid=this.activarRouter.snapshot.paramMap.get('id')
    this.http.get<any>('https://ecuafarma.herokuapp.com/Farmacias/'+this.farmaciaid)
    .subscribe (res =>{
      console.log(res);
      this.farmacia=res;
    })
    
  }

}
