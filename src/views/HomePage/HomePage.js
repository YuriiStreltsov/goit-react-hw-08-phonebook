import React from 'react';
import s from './HomePage.module.scss';
import { CSSTransition } from 'react-transition-group';

function HomePage() {
  return (
    <>
      <CSSTransition in={true} timeout={500} classNames={s} appear={true}>
        <h1 className={s.HomePage__title}>
          Welcome to <span className={s.HomePage__span}>Phonebook</span>
        </h1>
      </CSSTransition>

      <div className={s.HomePage__button__container}>
        <button type="button" className={s.HomePage__button__register}>
          Registration
        </button>
        <button type="button" className={s.HomePage__button__login}>
          LogIn
        </button>
      </div>
      <p className={s.HomePage__text}>
        If you are an unregistered user click the Registration button, if you
        are already registered click the LogIn button
      </p>
    </>
  );
}

export default HomePage;
