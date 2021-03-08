import React from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.Header}>
      <div className={s.wrapper}>
        <CSSTransition in={true} timeout={500} classNames={s} appear={true}>
          <h1 className={s.titleApp}>
            <a>Phonebook</a>
          </h1>
        </CSSTransition>
        <p className={s.greeting}>Welcome "USER"</p>
        <button type="button" className={s.button}>
          LogOut
        </button>
      </div>
    </header>
  );
}
