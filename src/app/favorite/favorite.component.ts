import { Component, OnInit, Input } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = true;
  // isFavorite: boolean;

  constructor() { }
  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
