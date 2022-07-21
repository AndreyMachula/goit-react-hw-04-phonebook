import React from 'react';
import PropTypes from 'prop-types';

// import styles from './PhoneList.module.css';

const PhoneList = ({ contacts, onDeleteContact }) => {
  return (
    <div className=''>
      <ul className=''>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className=''>
            <p className=''>{name}: {number}</p>
            <button className='' onClick={() => onDeleteContact(id)}>
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
