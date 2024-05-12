import { Injectable } from '@angular/core';

import { ObjectMapper } from 'json-object-mapper';

import { Subject } from '../../shared/models/subject';
import { Author } from '../../shared/models/author';

@Injectable({providedIn: 'root'})
export class WishlistState {
  add(subject: Subject) {
    const subjectArray = this.getExistingSubjectsList();
    subjectArray.push(subject)
    const _subjects = ObjectMapper.serialize(subjectArray);
    localStorage.removeItem('wishlist');
    localStorage.setItem('wishlist', _subjects.toString());
  }

  isSubjectInWishList(id: string) {
    let subjectArray: Subject[] = [];
    const subjects = localStorage.getItem('wishlist');
    
    if (subjects) {
      subjectArray = ObjectMapper.deserializeArray(Subject, JSON.parse(subjects));
    }
    
    return !!subjectArray.find(item => item.id === id);
  }

  remove(subject: Subject) {
    let subjectArray = this.getExistingSubjectsList();
    subjectArray = subjectArray.filter(item => item.id !== subject.id);
    const _subjects = ObjectMapper.serialize(subjectArray);
    localStorage.removeItem('wishlist');

    if (JSON.parse(_subjects.toString())?.length) {
      localStorage.setItem('wishlist', _subjects.toString());
    }
  }

  getWishList() {
    const subjects = localStorage.getItem('wishlist');
    if (subjects) {
      const _subjects = JSON.parse(subjects);
      _subjects.forEach((item: any) => {item.authors = ObjectMapper.deserializeArray(Author, item.authors)})
      return ObjectMapper.deserializeArray(Subject, _subjects);
    }
    return [];
  }

  private getExistingSubjectsList() {
    let subjectArray: Subject[] = [];
    const subjects = localStorage.getItem('wishlist');

    if (subjects) {
      subjectArray = [...subjectArray, ...ObjectMapper.deserializeArray(Subject, JSON.parse(subjects))];
    }

    return subjectArray;
  }
}