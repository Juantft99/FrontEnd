import { Component } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  farmacias=[]

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit(){
    this.http.get<any>('https://ecuafarma.herokuapp.com/Farmacias')
    .subscribe (res =>{
      console.log(res);
      this.farmacias=res;
    })
  }

}
