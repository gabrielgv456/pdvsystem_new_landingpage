import React, { useRef, useEffect, MutableRefObject, ReactNode } from 'react';
import * as S from './style'
import { MdArrowBackIos } from "react-icons/md";

interface DialogComponentProps {
  children: ReactNode
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogComponentProps> = ({ children, isOpen, onClose  }) => {
  const dialogRef: MutableRefObject<HTMLDialogElement | null> = useRef(null);

  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === dialogRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      dialogRef.current?.showModal();
      dialogRef.current?.addEventListener('click', handleBackdropClick);
    } else {
      dialogRef.current?.close();
    }

    return () => {
      dialogRef.current?.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, onClose]);


  return (
    <S.StyledDialog ref={dialogRef} onClose={onClose}>
      <S.CloseButton onClick={onClose}><MdArrowBackIos size={12}/></S.CloseButton>
      {children}
    </S.StyledDialog>
  );
};

export default Dialog;
