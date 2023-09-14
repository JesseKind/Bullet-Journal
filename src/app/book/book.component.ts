import { Component } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = BOOKS;
  newBookName: string = '';
  newBookDescription: string = '';
  selectedBook?: Book;

  constructor(public router: Router) {}

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  addBook(): void {
    if (this.newBookName.trim() !== '') {
      const newBook: Book = {
        id: this.books.length + 1, // Generate a new ID
        name: this.newBookName,
        description: this.newBookDescription,
      };
  
      // Push the new book to the books array
      this.books.push(newBook);
  
      // Clear the input field
      this.newBookName = '';
      this.newBookDescription = '';
    }
  }

  isNotOverviewPage(): boolean {
    // Check if the current route is not the 'Overview' page
    return this.router.url !== '/overview';
  }
}
