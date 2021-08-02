import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Component({
  selector: 'app-activas',
  templateUrl: './activas.page.html',
  styleUrls: ['./activas.page.scss'],
})
export class ActivasPage implements OnInit {
  Nom_farmacias=[]
  texto_buscar: '';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://ecuafarma.herokuapp.com/Farmacias')
    .subscribe (res =>{
      console.log(res);
      this.Nom_farmacias=res;
    })
  }
  buscar (event){
    this.texto_buscar=event.detail.value;

  }

}
