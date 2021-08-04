import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../models/user";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userBasePath = 'api/users/'

    constructor(private http: HttpClient) { }

    getUser(userName: String): Observable<IUser> {
        return this.http.get<IUser>(this.userBasePath + userName).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
  
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if (err.error) {
            errorMessage = `An error occurred: ${err.error}, status: ${err.status} `;
        } else {
            errorMessage = `Non è stato possibile recuperare le info dell'utente: ${err.status}, error: ${err.message}`;
        }  
        //alert(errorMessage);
        //this.toastr.error(errorMessage)
        return throwError(errorMessage);
    }
}