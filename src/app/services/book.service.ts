import { Injectable } from '@angular/core';
import { url } from '../api.settings';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(book: String) {
    const response = Axios.get(`${url}+${book}`);
    return response;
  }
}
