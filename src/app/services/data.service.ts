import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(response => response))
            .pipe(catchError(this.handleError));
    }

    create(resource) {
        return throwError(new AppError());

        // return this.http.post(this.url, JSON.stringify(resource))
        //     .pipe(map(response => response))
        //     .pipe(catchError(this.handleError));
    }

    update(resource) {
        // 'patch' is update only one part of an object
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .pipe(map(response => response))
            .pipe(catchError(this.handleError));

        // return this.http.put(this.url, JSON.stringify(resource));
    }

    delete(id) {
        return throwError(new AppError());
        // return this.http.delete(this.url + '/' + id)
        //     .pipe(map(response => response))
        //     .pipe(catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }

        if (error.status === 404) {
            return throwError(new NotFoundError());
        } else {
            return throwError(new AppError(error));
        }
    }
}
