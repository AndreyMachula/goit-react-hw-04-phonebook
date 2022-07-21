import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Filter.module.css';

const Filter = ({ contactName, onFindContact }) => {
  return (
    <div>
       <label className='' htmlFor="">
      Find contacts by name
      <input
        className=''
        type="text"
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