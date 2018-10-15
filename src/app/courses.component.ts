import { Component } from '@angular/core';

@Component({
    selector: 'courses',  
    template: `
                <h2>Two Way Binding</h2>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
                <br/><br/>
                <h2>Pipes - Course</h2>
                {{ course.title | uppercase | lowercase}} <br/>
                {{ course.rating | number:'2.1-1' }} <br/>
                {{ course.students | number }} <br/>
                {{ course.price | currency:code }} <br/>
                {{ course.releaseDate | date:'mediumDate' }} <br/>

                <h2>Custom pipe</h2>
                {{ text | summary:60}}
    `
    // angular.io  --> datepipe
    // {{ course.price | currency:'COP' }} <br/>
    // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
})
export class CoursesComponent{

    email = "test@domain.co";
    onKeyUp(){
        console.log(this.email);
        
    }

    course = {
        title: "The complete Angular course",
        rating: 4.5634,
        students: 1340,
        price: 195900.99,
        releaseDate: new Date(2018,9,15)  //months are from 0 to 11!!
    }

    text =`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
}
