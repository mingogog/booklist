import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BookCard } from './BookCard';;
import { BookForm } from './BookForm';
import { useModal } from '@/hooks/useModal';

export const BookList = () => {
  const books = useSelector(state => state.bookList.books);
  const {Modal, openModal: showBookForm, closeModal: closeBookForm} = useModal();
  const [formData, setFormData] = useState(null);
  const [modalTitle, setmodalTitle] = useState('');

  const addBookForm = () => {
    setFormData(null);
    setmodalTitle('Book List / Add Book')
    showBookForm();
  }

  const editBookForm = (book) => {
    setFormData(book);
    setmodalTitle('Book List / Edit Book')
    showBookForm();
    console.log('edit book', book)
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fill,22rem)] gap-4 justify-center">
      <div onClick={addBookForm} className='h-72 cursor-pointer text-6xl rounded-xl border-slate-200 px-12 py-8 right flex justify-center items-center hover:text-opacity-75 text-slate-600 border-dashed border-4 hover:bg-slate-50'>
      +
      </div>
      {
        books.map((book, index) => ( 
            <BookCard
                key={index}
                id={book.id} 
                name={book.name}
                price={book.price}
                category={book.category}
                description={book.description}
                editBook={() => editBookForm(book)}
            />
        ))
      }
      <Modal title={modalTitle}>
        <BookForm onFinish={closeBookForm} formData={formData}/>
      </Modal>
    </div>
  )
}