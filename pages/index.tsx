import Image from "next/image";
import { Inter } from "next/font/google";
import { sampleBooks } from '../consts/sampleBooks';
const inter = Inter({ subsets: ["latin"] });

import { GetServerSideProps } from 'next';
import { useDispatch } from 'react-redux';
// import { fetchBooks } from '../redux/actions/bookActions';
import store from '../redux/store';
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import { BookForm } from "@/components/BookForm";
import { initBooks } from "@/redux/actions/bookActions";
import { Book } from "@/redux/types";
import { BookCard } from "@/components/BookCard";
import { set } from "react-hook-form";
import { BookList } from "@/components/BookList";


interface BooksPageProps {
  books: Book[];
}

const Home = ({books}:BooksPageProps) => {
  // console.log('sampleBooks', sampleBooks)
// const books = store.getState().bookReducer.books
const {Modal, openModal: showBookForm, closeModal: closeBookForm} = useModal();
const [formData, setFormData] = useState(null);
const [modalTitle, setmodalTitle] = useState('');
// const dispatch = useDispatch();

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
  <div className='relative w-full h-ful'>
    <div className="p-32">
      <div className="grid grid-cols-[repeat(auto-fill,22rem)] gap-4 justify-center">
          <div onClick={addBookForm} className='h-72 cursor-pointer text-6xl rounded-xl border-slate-200 px-12 py-8 right flex justify-center items-center hover:text-opacity-75 text-slate-600 border-dashed border-4 hover:bg-slate-50'>
          +
          </div>
          <BookList/>
          {/* {
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
          } */}
      </div>
  </div>
  <Modal title={modalTitle}><BookForm onFinish={closeBookForm} formData={formData}/></Modal>
  </div>
);
};

export const getServerSideProps: GetServerSideProps = async () => {
  await store.dispatch(initBooks(sampleBooks))
  return {
    props: {}
  }
};

export default Home;

