import React, { Component } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import s from './Login.module.scss';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  inputEmailId = shortid.generate();
  inputPasswordId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { inputEmailId } = this.inputEmailId;
    const { inputPasswordId } = this.inputPasswordId;
    const { email, password } = this.state;
    return (
      <>
        <h2 className={s.LoginTitle}>To Login, fill in all the fields below</h2>
        <form className={s.LoginForm}>
          <label htmlFor={inputEmailId} className={s.labelTitle}>
            Email:
          </label>
          <input
            id={inputEmailId}
            type="email"
            name="email"
            onChange={this.handleChange}
            className={s.input}
            value={email}
          />
          <label htmlFor={inputPasswordId} className={s.labelTitle}>
            Password:
          </label>
          <input
            id={inputPasswordId}
            type="password"
            name="password"
            onChange={this.handleChange}
            className={s.input}
            value={password}
          />
          <Button
            style={{ marginRight: 'auto', width: 200 }}
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<InputIcon />}
          >
            Log in
          </Button>
        </form>
      </>
    );
  }
}

export default LogIn;
