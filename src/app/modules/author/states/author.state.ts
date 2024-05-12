import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { Author } from "../../shared/models/author";
import { AuthorService } from "../services/author.service";

@Injectable({providedIn: 'root'})
export class AuthorState {
  private _loaded$ = new BehaviorSubject(false);
  public loaded$ = this._loaded$.asObservable();

  private _author$ = new BehaviorSubject<Author | null>(null);
  public author$ = this._author$.asObservable();

  private _errorLoading$ = new BehaviorSubject<string>('');
  public errorLoading$ = this._errorLoading$.asObservable();

  constructor(private service: AuthorService) {}

  public fetchAuthDetail(id: string) {
    this.service.getAuthDetail(id).subscribe({
      next: (data) => {
        this._author$.next(data);
        this._errorLoading$.next('');
        this._loaded$.next(true)
      },
      error: () => {
        this._errorLoading$.next('Something went wrong');
        this._loaded$.next(true)
      }
    })
  }

  public reset() {
    this._author$.next(null);
    this._errorLoading$.next('');
    this._loaded$.next(false);
  }
}