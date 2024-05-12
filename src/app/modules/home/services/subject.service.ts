import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { environment } from '../../../../environments/environment.development';
import { ObjectMapper } from 'json-object-mapper';
import { Subject } from '../../shared/models/subject';
import { Author } from '../../shared/models/author';

const baseUrl = environment.endpoint;
const coverUrl = environment.coverEndpoint;

@Injectable({providedIn: 'root'})
export class SubjectService {
  constructor(private http: HttpClient) {}

  public getSubjects(subject: string) {
    return this.http.get(`${baseUrl}subjects/${subject}.json?limit=9`).pipe(
      map((data: any) => ObjectMapper.deserializeArray(Subject, 
        data.works.map((item: any) => {
          item.authors.forEach((author: any) => {
            author.key = this.splitKey(author.key)
          })
          return {
            ...item, 
            coverImage: item.cover_id ? `${coverUrl}${item.cover_id}.jpg` : 'https://placehold.co/600x400',
            authors: ObjectMapper.deserializeArray(Author,  item.authors),
            id: this.splitKey(item.key)
        }})
      ))
    )
  }

  private splitKey(value: string) {
    const splittedKey = value.split('/');
    const id = splittedKey[splittedKey.length - 1];
    return id;
  }
}
