import type { FC, ReactNode } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import React from 'react';

interface Option {
  initialShow?: boolean
  onClose?: () => void
}

type Props = {
  title?: ReactNode
  children?: ReactNode
}

export const useModal = (option?: Option) => {
  const [isModalOpen, setIsModalOpen] = useState(option?.initialShow || false)

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, [])
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    option?.onClose && option.onClose()
  }, [option])
  
  const CustomModal: FC<Props> = ({children, title}:Props) => {
    return (
      isModalOpen&&
      <div className="z-10 inset-0 fixed">
      <div
        className="flex items-center justify-center min-h-screen bg-gray-200 bg-opacity-75 transition-opacity"
      >
          <div
            className="flex flex-col items-center justify-between bg-white py-20 rounded-xl relative"
          >
            <div
              className="text-sm font-medium text-slate-600 tracking-wider absolute top-5 left-8"
            >
              {title}
            </div>
              <div
              onClick={closeModal}
                className="text-slate-300 absolute top-1 right-3 text-2xl hover:text-slate-500 cursor-pointer font-light"
              >
                x
              </div>
              {children}
          </div>
      </div>
  </div>
    )
  };

  return {
    Modal: CustomModal,
    isModalOpen,
    openModal,
    closeModal,
  };
};

