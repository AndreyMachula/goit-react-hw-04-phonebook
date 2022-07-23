import { Component } from 'react';
import PropTypes from 'prop-types';

import FORM_VALIDATION from '../../data/formValidation.json';

import styles from './InputForm.module.css';

export default class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <ul className={styles.List}>
          {FORM_VALIDATION.map(({ type, name, pattern, title }) => (
            <li key={name} className={styles.Item}>
              <label className={styles.Label}>
                {name}
                <input
                  className={styles.Input}
                  type={type}
                  name={name}
                  pattern={pattern}
                  title={title}
                  value={this.state[name]}
                  onChange={this.handleChange}
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
}

InputForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
