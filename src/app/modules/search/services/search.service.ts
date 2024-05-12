import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";

const backendUrl = environment.endpoint;

@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchBooks(query: string, type: string) {
    return this.http.get(`${backendUrl}search.json?${type}=${query}&limit=9`)
  }
}