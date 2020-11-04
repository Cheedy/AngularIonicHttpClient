import { Component, OnInit } from '@angular/core';
import { ElevesService } from '../eleves.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit
{
  eleveData;
  constructor(private eleveService: ElevesService) {}

  ngOnInit()
  {
    this.eleveService.getEleves().subscribe((data) => 
      {
        this.eleveData = data['eleves'];
        console.log(data);
      }, (error) => 
      {
        console.log('erreur');
      }
      )
  }
}
