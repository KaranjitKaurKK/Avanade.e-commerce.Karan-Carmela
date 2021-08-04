import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../models/user";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userBasePath = '/api/users/'

    constructor(private http: HttpClient) { }

    getUsers(firstName: string): Observable<IUser> {
        return this.http.get<IUser>(this.userBasePath +'./'+ firstName).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message} `;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        alert()
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
