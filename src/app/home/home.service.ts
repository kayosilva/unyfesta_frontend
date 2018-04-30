import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HOST_API } from '../app.api';
import { ErrorHandler } from '../app.erro-handler';

@Injectable()
export class HomeService {

    constructor(private http: Http) {}

    // Calcular festa
    calculate(value): Observable <any> {
        return this.http.get(`${HOST_API}/calculate`, {params: value})
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

}