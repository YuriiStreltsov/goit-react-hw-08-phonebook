import React, { Component } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import s from './Register.module.scss';

class Register extends Component {
  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();
  inputPasswordId = shortid.generate();

  render() {
    const { inputNameId } = this.inputNameId;
    const { inputNumberId } = this.inputNumberId;
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
            onChange={this.handleChange}
            className={s.input}
          />
          <label htmlFor={inputNumberId} className={s.labelTitle}>
            Email:
          </label>
          <input
            id={inputNumberId}
            type="email"
            name="number"
            onChange={this.handleChange}
            className={s.input}
          />
          <label htmlFor={inputPasswordId} className={s.labelTitle}>
            Password:
          </label>
          <input
            id={inputPasswordId}
            type="email"
            name="number"
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
