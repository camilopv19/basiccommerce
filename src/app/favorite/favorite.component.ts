import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  
  styles:[
    `.glyphicon {
      color: red;
  }`
  ],
  styleUrls: ['./favorite.component.css'], //The last style is applied, in this case, this one is applied
})
export class FavoriteComponent {
// export class FavoriteComponent implements OnInit { //Without styles
  //Decorator Input has as parameter the "alias" for isFavorite variable
  @Input('is-favorite') isSelected = false;
  @Output('change') click = new EventEmitter();

  // constructor() { }  //Without styles
  // ngOnInit() { //Without styles
  // }

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue:this.isSelected });
  }
  
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}