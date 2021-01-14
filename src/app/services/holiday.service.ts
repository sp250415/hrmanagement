import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http:HttpClient) { }

  postHoliday(data){
    return this.http.post('http://localhost:3000/holiday' , data )
  }

  getAllHolidays(){
    return this.http.get('http://localhost:3000/holidays')
  }

  deleteHolidays(_id){
    return this.http.get('http://localhost:3000/holiday/:id')
  }
}
