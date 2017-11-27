import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../core/services/auth.service';
import {UtilitiesService} from '../../core/services/utilities.service';
import {PatientConstants} from './patient.config';
import {Patient} from './patient.model';

import 'rxjs/add/operator/map';

@Injectable()
export class PatientService {

    constructor(private http: Http,
                private authService: AuthService,
                private  utilitiesService: UtilitiesService) {}

    getAllPatients(): Observable<Patient[]> {
        let url = environment.apiUrl + PatientConstants.API_GET_ALL_PATIENTS;
        let options = this.authService.getRequestOptions();

        return this.http.get(url, options)
            .map(this.utilitiesService.extractDataFromJSON);
    }
}