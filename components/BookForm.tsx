import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react'
import { categoryList } from '../consts/list'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, updateBook } from "@/redux/actions/bookActions";
import { v4 as uuidv4 } from 'uuid';
import { Book } from "@/redux/types";

type Props = {
    formData: Book | null
    onFinish: () => void
}

export const BookForm = ({formData, onFinish}:Props) => {
    const dispatch = useDispatch();
    const action = formData? 'edit' : 'add';
    const {
        register,
        handleSubmit,
        setValue,
        reset
    } = useForm<Book>();

    const onSubmit: SubmitHandler<Book> = (data) => {
        if(action === 'add'){
            dispatch(addBook({...data, id:uuidv4()}))
        }else if(action==='edit'){
            dispatch(updateBook({...data}))
        }
        onFinish()
        reset()
    };

    React.useEffect(() => {
        if(formData){
            setValue('id', formData.id);
            setValue('name', formData.name);
            setValue('price', formData.price);
            setValue('category', formData.category);
            setValue('description', formData.description);
        }
    }, [formData, setValue]);

    return (
        <div className="w-[500px]">
            <p className="mt-10 text-xl text-gray-500"></p>
            <div className="w-full px-12">
                <form>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-slate-600 font-">Name</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-60 rounded-md border-2 outline-none text-slate-600 px-2 py-0.5"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-slate-600">Price</label>
                            <input
                                type="number"
                                {...register("price", { required: true, valueAsNumber: true})}
                                className="w-60 rounded-md border-2 outline-none text-slate-600 px-2 py-0.5"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-slate-600">Category</label>
                            <select
                                {...register("category", { required: true })}
                                className='px-2 py-0 w-60 flex items-center justify-between text-sm rounded-lg tracking-wider border-2 active:border-slate-300 active:text-slate-400 duration-100 h-8 text-slate-600 outline-none'
                            >
                                {categoryList.map((item, i) => (
                                    <option value={item} key={i}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-start justify-between">
                            <label className="text-slate-600">Description</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="text-slate-600 rounded-md outline-none border-2 w-60 block p-2.5"
                                placeholder="Book Description..."
                                {...register("description", { required: true })}
                            ></textarea>
                        </div>
                        <button
                            id="close-modal-btn"
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                            className="border border-gray-200 px-6 py-2 mt-10 bg-teal-500 hover:bg-teal-600 text-white rounded uppercase tracking-wider"
                        >
                            {action==='add'? 'Submit':'Edit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}