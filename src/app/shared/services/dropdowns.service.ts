import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DropdownsService {
  constructor(private http: HttpClient) { }

  getDepartmentDropDown(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Department/DropDown?CompanyCode=edesk`)
  }

  getGroupDropDown(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Group/DropDown?CompanyCode=edesk`)
  }

  getDevisionDropDown(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Devision/DropDown?CompanyCode=edesk`)
  }

  getCompanyDropDown(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}Company/DropDown`)
  }


}
