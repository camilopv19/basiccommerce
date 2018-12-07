import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'basiccommerce';
  courses;
  post = {
    title: "Title",
    isFavorite: false
  };

  viewMode = '';
  active = false;
  canSave = true;
  canSave1 = false;
  
  task = {
    title: 'Review Apps',
    assignee:{
      name: 'Nataly Rojas'
    }
  };

  onAdd(){
    this.courses.push({ id: 4, name: 'Popcorn' })
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }

  onChange(course){
    course.name = 'Updated';
  }

  loadCourses(){
    this.courses = [
      { id: 1, name: 'Burguers '},
      { id: 2, name: 'Hotdogs '},
      { id: 2, name: 'Pretzels '}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite changed: ", eventArgs);
  }

}
