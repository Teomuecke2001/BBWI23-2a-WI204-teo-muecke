import { Injectable } from '@angular/core';
import { CV } from '../models/cv';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class CVService {
//   constructor() { }

//   getCVs(): CV[] {
//     return [
//       new CV('BNC', 2023, 2024),
//       new CV('DBSchenker', 2021, 2023),
//       new CV('DBSchenker', 2018, 2021),
//     ]
//   }
// }

export class CVService {
  constructor(
  private http: HttpClient
  ) { }
  getCVs(): Observable<CV[]> {
  return this.http.get<CV[]>('/api/cvs/');
  }
  createCV(cv: CV): Observable<CV> {
  return this.http.post<CV>(`/api/cvs/`, cv);
  }
  updateCV(id: string, cv: CV): Observable<CV> {
  return this.http.put<CV>(`/api/cvs/${id}/`, cv);
  }
  deleteCV(id: string, ): Observable<void> {
  return this.http.delete<void>(`/api/cvs/${id}/`);
  }
  getCVById(id: string, ): Observable<CV> {
    return this.http.get<CV>('/api/cvs/' + id);
  }

 }