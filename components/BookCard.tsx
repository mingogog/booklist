import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook } from "@/redux/actions/bookActions";

const categoryList = [
    "FICTION",
    "NON-FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "TECHNOLOGY",
    "BUSINESS",
    "SELF-HELP",
    "FANTASY",
    "ROMANCE",
    "THRILLER",
    "HORROR",
    "MYSTERY",
    "ADVENTURE",
    "COMEDY",
    "DRAMA",
    "ACTION",
    "CRIME",
    "DOCUMENTARY",
    "FAMILY",
    "MUSICAL",
    "SCI-FI",
    "SPORT",
    "WAR",
    "WESTERN",
    "ANIME",
    "CARTOON",
] as const;

export type BookType = {
    id: string,
    name: string
    price: number
    category: typeof categoryList[number]
    description: string
    editBook: () => void
}

export const BookCard:FC<BookType> = ({id, name, price, category, description, editBook}:BookType) => {
    const dispatch = useDispatch();
    const handleRemove = (e) => {
        e.stopPropagation();
        dispatch(deleteBook(id))
    }
    return (
    <div onClick={editBook} className='group relative rounded-xl bg-slate-100 px-12 py-8 flex flex-col space-y-4 h-72 cursor-pointer'>
        <div onClick={handleRemove} className='text-lg text-slate-300 absolute right-3 top-2 font-bold opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity cursor-pointer'>
            X
        </div>
        <p className='text-xl font-bold text-slate-700 whitespace-nowrap text-ellipsis overflow-hidden'>{name}</p>
        <p className='text-slate-700 text-sm'>${price}</p>
        <div className='flex flex-wrap space-x-3'>
            <div className='bg-red-200 px-2 py-1 rounded-md text-sm text-red-400'>
                {category}
            </div>
        </div>
        <p className="text-sm text-slate-700 overflow-hidden line-clamp-4" style={{textOverflow: 'ellipsis'}}>
            {description}
        </p>
    </div>
)
}
