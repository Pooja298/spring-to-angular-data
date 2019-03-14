import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]
})
export class BeerListComponent implements OnInit {
  beers: Array<any>;
  a: any=0;
  b: any=0;
  result :any =0;

    onClick()
    {
      this.result = this.a + this.b;
      console.log(this.result);
    }
  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
      },
      error => console.log(error)
    )
    
  }
  
}