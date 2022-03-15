import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book.model';
import { ReduceTextService } from '../services/reduce-text.service';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  // armazena a lista de livros
  public books: Book[] = [];

  // input de pesquisa
  public form!: FormGroup;

  constructor(
    public BookService: BookService,
    public reduceText: ReduceTextService,
    public searchInput: FormBuilder
  ) {

    // formBuilder
    this.form = this.searchInput.group({
      search: ['', Validators.compose([
        Validators.required, Validators.minLength(3)
      ])]
    });

  }

  getAll() {
    const bookName = this.form.controls['search'].value;
    this.BookService.getBooks(bookName).then((res) => {
      for (let i = 0; i < res.data.items.length; i++) {
        const book: any = res.data.items[i];
        this.books.push(
          new Book(
            book.id,
            book.volumeInfo.title,
            book.volumeInfo.imageLinks.smallThumbnail,
            this.reduceText.textLimiter(book.volumeInfo.description)
          ));
      }
      console.log(this.books);
    }).catch((err) => console.log(err));
  }
}
