import { Flatbond } from '../models/flatbond.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class FlatbondService {

    constructor(private http: HttpClient) {}

    getFlatbonds(): Observable<Flatbond> {
        return this.http.get<Flatbond>('/assets/flatbonds.json');
    }
}
