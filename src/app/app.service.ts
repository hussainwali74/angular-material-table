import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    rootURL = 'https://jsonplaceholder.typicode.com/posts';

    getPosts() {
        return this.http.get(this.rootURL);
    }



}