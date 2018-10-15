// import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
/**                -------------  CSS ----------------*/
// <courses>                --> "courses"
// <div class="courses">    --> ".courses"
// <div id="courses">       --> "#courses"
/*
@Component({
    selector: 'courses',  // <courses> will be rendered by Angular
    template: `<h2>{{ "Your are in: " + getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
                
                <table>
                <tr>
                <td [attr.colspan]="colSpan"></td>
                </tr>
                </table>
                <button class="btn btn-primary" [class.active]="isActive">Class binding</button>
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green':'red'">Style binding</button>

                <div (click)="divClick()">
                    <button (click)="onSave($event)" class="btn btn-primary">Event binding</button>
                </div>
                <input (keyup.enter)="keyUp()" />
                <div>
                    <input #email (keyup.enter)="onKeyUp(email.value)"/>
                </div>
                <h2>{{gfName}}</h2>
                <img [src]="imgUrl" />
                <img src="{{imgUrl}}" />
    `
    //  @    - Decorator
    //  {{}} - String interpolation  --> for DIV's, SPAN, H1/2/3... or text insertion
    // []="" - Square brackets syntax
    //  *ngFor - Directives: Building Blocks to manipulate the DOM
    // #  -  Template variable (DOM - $event.target.value replacement)
})
export class CoursesComponent{
    title = "List of courses";
    colSpan = 2;
    isActive = true;

    gfName = "NatyPya";
    imgUrl = "https://pbs.twimg.com/profile_images/378800000205955806/96b0d621ba020ffcbb5f0ae6d45c09f8_400x400.jpeg";
    // courses = ["Angular","React","NodeJS","Solidity","Vyper"];
    getTitle(){
        return this.title;
    }
    
    //Logic for calling an HTTP service
    courses; // Fake implementation of a HTTP service consumption --> Just access the courses.service.ts
             //  for the "get" method

    /** DEPENDENCY INJECTION
     *  Injecting or providing dependencies of any class into the constructor
     */
 /*   constructor(service: CoursesService){  // Now the constructor has a Dependency to the CoursesServices component: Building its instance
                                            // and CoursesService is mantainable
        // let service = new CoursesService();  // FRAGILE CODE!! AVOID --> Tightly coupled: Cannot run unit testing properly
        this.courses = service.getCourses();
    }

    onSave($event){
        $event.stopPropagation();  //Stops event bubbling
        console.log("Event binded", $event);
    }

    divClick(){
        console.log("Div clicked");    
    }
    
    keyUp(){
        console.log("Novia presionó ENTER");  
    }
    onKeyUp(email){
        console.log(email);  
    }
}
*/