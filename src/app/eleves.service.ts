import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ElevesService 
{
  constructor(public http: HttpClient){}

  getEleves()
  {
    return this.http.get("../assets/eleves.json");
  }
}
