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
  books: Book[] = [];
  readBooks: Book[] = [];
  newBookName: string = '';
  newBookDescription: string = '';
  newReadBookName: string = ''; // New input for read books
  newReadBookDescription: string = ''; // New input for read books
  selectedBook?: Book;

  constructor(public router: Router) {
    // Retrieve the state from localStorage if it exists
    const storedBooks = localStorage.getItem('books');
    const storedReadBooks = localStorage.getItem('readBooks');

    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    } else {
      // If no books are in local storage, use the initial BOOKS array
      this.books = [...BOOKS];
    }

    if (storedReadBooks) {
      this.readBooks = JSON.parse(storedReadBooks);
    }
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  addBook(): void {
    if (this.newBookName.trim() !== '') {
      const newBook: Book = {
        id: Math.floor(Math.random() * Date.now()), // Generate a random number based on the current timestamp
        name: this.newBookName,
        description: this.newBookDescription,
        isRead: true,
      };

      // Check if the generated ID already exists and regenerate if needed
      while (this.books.some(book => book.id === newBook.id)) {
        newBook.id = Math.floor(Math.random() * Date.now());
      }

      this.books.push(newBook);

      // Update the local storage to persist the state
      localStorage.setItem('books', JSON.stringify(this.books));
      localStorage.setItem('readBooks', JSON.stringify(this.readBooks));

      this.newBookName = '';
      this.newBookDescription = '';
    }
  }

  markAsRead(book: Book): void {
    book.isRead = true;
    this.readBooks.push(book);
    this.books = this.books.filter(b => b !== book);

    // Update the local storage to persist the state
    localStorage.setItem('books', JSON.stringify(this.books));
    localStorage.setItem('readBooks', JSON.stringify(this.readBooks));
  }

  moveToBooks(book: Book): void {
    book.isRead = false;
    this.books.push(book);
    this.readBooks = this.readBooks.filter(b => b !== book);

    // Update the local storage to persist the state
    localStorage.setItem('books', JSON.stringify(this.books));
    localStorage.setItem('readBooks', JSON.stringify(this.readBooks));
  }

  addReadBook(): void {
    if (this.newReadBookName.trim() !== '') {
      const newReadBook: Book = {
        id: Math.floor(Math.random() * Date.now()), // Generate a random number based on the current timestamp
        name: this.newReadBookName,
        description: this.newReadBookDescription,
        isRead: true,
      };

      // Check if the generated ID already exists and regenerate if needed
      while (this.readBooks.some(book => book.id === newReadBook.id)) {
        newReadBook.id = Math.floor(Math.random() * Date.now());
      }

      this.readBooks.push(newReadBook);

      // Update the local storage to persist the state
      localStorage.setItem('readBooks', JSON.stringify(this.readBooks));

      this.newReadBookName = '';
      this.newReadBookDescription = '';
    }
  }
}
