import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosCovidService {

  constructor(private http :HttpClient) { }

  obtenerDatosCovid() {
    return  this.http.get("https://api.covidtracking.com/v1/us/daily.json");
  }
}
