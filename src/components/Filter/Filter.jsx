import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ contactName, onFindContact }) => {
  return (
    <div className={styles.Container}>
       <label className={styles.Label} htmlFor="">
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        placeholder="Search..."
        value={contactName}
        onChange={onFindContact}
      />
    </label>
    </div>
   
  );
};

Filter.propTypes = {
  contactName: PropTypes.string.isRequired,
  onFindContact: PropTypes.func.isRequired,
};

export default Filter;