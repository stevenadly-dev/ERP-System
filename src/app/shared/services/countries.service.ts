import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>(`assets/countries.json`).pipe(map(x => x.Countries))
  }


}
