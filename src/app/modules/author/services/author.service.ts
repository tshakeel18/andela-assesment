import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map,  switchMap } from 'rxjs';
import { ObjectMapper } from 'json-object-mapper';

import { Author } from '../../shared/models/author';
import { environment } from '../../../../environments/environment.development';

const baseUrl = environment.endpoint;
const photoUrl = environment.coverEndpoint;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}

  public getAuthDetail(id: string) {
    return this.getAuthorDetailById(id).pipe(
      switchMap(data => this.getAuthorDetailByName(data, id)),
      map(data =>  ObjectMapper.deserialize(Author, data))
    )
  }

  private getAuthorDetailById(id: string) {
    return this.http.get(`${baseUrl}authors/${id}.json`).pipe(
      map((data: any) => ({name: data.name, photos: data.photos?.length ? `${photoUrl}${data.photos[0].jpg}` : 'https://placehold.co/600x400',  birth_date: data.birth_date}))
    )
  }

  private getAuthorDetailByName(basicInfo: any, id: string) {
    return this.http.get(`${baseUrl}search/authors.json?q=${basicInfo.name}`).pipe(
      map((data: any) => data.docs.find((item: any) => item.key === id)),
      map(data => ({top_work: data.top_work, top_subjects: data.top_subjects?.slice(0, 5), work_count: data.work_count, ...basicInfo}))
    )
  }
}
