import React from 'react'
import { useSelector } from 'react-redux';
import { BookCard } from './BookCard';
import { DiVim } from 'react-icons/di';

export const BookList = () => {
  const books = useSelector(state => state.bookList.books);
  function editBookForm(book: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      {
        books.map(book=>(<div>dsa</div>))
        // books.map((book, index) => ( 
        //     <BookCard
        //         key={index}
        //         id={book.id} 
        //         name={book.name}
        //         price={book.price}
        //         category={book.category}
        //         description={book.description}
        //         editBook={() => editBookForm(book)}
        //     />
        // ))
      }
    </>
  )
}