import React from 'react';
import PropTypes from 'prop-types';

import styles from './PhoneList.module.css';

const PhoneList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.Container}>
      <ul className={styles.List}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.Item}>
            <p className={styles.Description}>{name}: <span className={styles.Span}>{number}</span> </p>
            <button className={styles.Button} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

PhoneList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneList;
