import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Art } from '../models/arts.model';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(private http: HttpClient) { }

  public getArtworks(): Observable<Array<Art>> {
    return this.http.get<{items: Art[]}>(environment.baseApiUrl + '/art').pipe(map((arts)=>arts.items || []));
  }


}
