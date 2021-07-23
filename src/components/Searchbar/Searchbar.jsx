import PropTypes from 'prop-types';
import React, { useState } from 'react';
import s from 'components/Searchbar/Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={value}
        />
      </form>
    </header>
  );
}



Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
