import { Component } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = BOOKS;
  newBookName: string = '';
  selectedBook?: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  addBook(): void {
    if (this.newBookName.trim() !== '') {
      const newBook: Book = {
        id: this.books.length + 1, // Generate a new ID
        name: this.newBookName,
        description: '', // You can add a description if needed
      };
  
      // Push the new book to the books array
      this.books.push(newBook);
  
      // Clear the input field
      this.newBookName = '';
  
      // Optionally, select the newly added book
      this.selectedBook = newBook;
    }
  } 
}