import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, modalImg }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('click');
      closeModal();
    }
  };

  const backDropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={backDropClick}>
      <div className={s.Modal}>
        <img src={modalImg.img} alt={modalImg.tags} key={modalImg.id} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalImg: PropTypes.object,
};
