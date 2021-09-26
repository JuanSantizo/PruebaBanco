import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private _refresh$ = new Subject<void>();

  API_URI = 'http://localhost:4000/API';

  constructor(private http: HttpClient) {}

  get refresh$() {
    return this._refresh$;
  }

  getEmpresas() {
    return this.http.get<any>(`${this.API_URI}/Empresa`);
  }

  getEmpresa(id: number) {
    return this.http.get<any>(`${this.API_URI}/Empresa/${id}`);
  }

  saveEmpresa(data: {}) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(`${this.API_URI}/Empresa`, data, { headers }).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  updateEmpresa(id: number, data: {}) {
    const headers = { 'Content-Type': 'application/json' };

    return this.http
      .put(`${this.API_URI}/Empresa/${id}`, data, { headers })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }
}
