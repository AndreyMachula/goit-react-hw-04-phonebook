import { Component } from 'react';
import PropTypes from 'prop-types';

import FORM_VALIDATION from '../../data/formValidation.json';

// import styles from './InputForm.module.css';

export default class InputForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

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
      <form onSubmit={this.handleSubmit} className="">
        <ul className="">
          {FORM_VALIDATION.map(({ type, name, pattern, title, required }) => (
            <li key={name} className="">
              <label className="">
                {name}
                <input
                  className=""
                  type={type}
                  name={name}
                  pattern={pattern}
                  title={title}
                  value={this.state[name]}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" className="">
          add contact
        </button>
      </form>
    );
  }
}

FORM_VALIDATION.PropTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
