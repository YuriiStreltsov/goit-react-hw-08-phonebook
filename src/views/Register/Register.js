import React, { Component } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import s from './Register.module.scss';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  inputNameId = shortid.generate();
  inputEmailId = shortid.generate();
  inputPasswordId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    const { inputNameId } = this.inputNameId;
    const { inputEmailId } = this.inputEmailId;
    const { inputPasswordId } = this.inputPasswordId;
    return (
      <>
        <h2 className={s.RegisterTitle}>
          To register, fill in all the fields below
        </h2>
        <form className={s.RegisterForm}>
          <label htmlFor={inputNameId} className={s.labelTitle}>
            Name:
          </label>
          <input
            id={inputNameId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={s.input}
          />
          <label htmlFor={inputEmailId} className={s.labelTitle}>
            Email:
          </label>
          <input
            id={inputEmailId}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className={s.input}
          />
          <label htmlFor={inputPasswordId} className={s.labelTitle}>
            Password:
          </label>
          <input
            id={inputPasswordId}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className={s.input}
          />
          <Button
            style={{ marginRight: 'auto', width: 200 }}
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<PersonAddIcon />}
          >
            Register now
          </Button>
        </form>
      </>
    );
  }
}

export default Register;
