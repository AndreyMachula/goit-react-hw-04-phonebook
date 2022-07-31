import { useState } from 'react';
import PropTypes from 'prop-types';

import FORM_VALIDATION from '../../data/formValidation.json';

import styles from './InputForm.module.css';

const InputForm = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  // state = {
  //   name: '',
  //   number: '',
  // };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={handleSubmit} className={styles.Form}>
        <ul className={styles.List}>
          {FORM_VALIDATION.map(({ type, name, pattern, title, placeholder, required }) => (
            <li key={name} className={styles.Item}>
              <label className={styles.Label}>
                {name}
                <input
                  className={styles.Input}
                  type={type}
                  name={name}
                  pattern={pattern}
                  title={title}
                  placeholder={placeholder}
                  value={name[name]}
                  onChange={handleChange}
                  required
                />
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" className={styles.Button}>
          add contact
        </button>
      </form>
    );
  
}

InputForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default InputForm
