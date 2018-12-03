import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'basiccommerce';
  courses = [];
  post = {
    title: "Title",
    isFavorite: false
  }

  viewMode = 'map';

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed: ", eventArgs);
  }

}
