import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
/**                -------------  CSS ----------------*/
// <courses>                --> "courses"
// <div class="courses">    --> ".courses"
// <div id="courses">       --> "#courses"
@Component({
    selector: 'courses',  // <courses> will be rendered by Angular
    template: `<h2>{{ "Your are in: " + getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
    `
    //  @    - Decorator
    //  {{}} - String interpolation
    //  *ngFor - Directives: Building Blocks to manipulate the DOM
})
export class CoursesComponent{
    title = "List of courses";
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
    constructor(service: CoursesService){  // Now the constructor has a Dependency to the CoursesServices component: Building its instance
                                            // and CoursesService is mantainable
        // let service = new CoursesService();  // FRAGILE CODE!! AVOID --> Tightly coupled: Cannot run unit testing properly
        this.courses = service.getCourses();
    }
}
