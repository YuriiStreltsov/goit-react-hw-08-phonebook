import React, { Component } from 'react';
import Container from './components/Container/Container';
import './index.css';
import FormAddContact from './components/FormAddContact/FormAddContact';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <CSSTransition
            in={true}
            timeout={500}
            classNames="titleApp"
            appear={true}
          >
            <h1 className="titleApp">Phonebook</h1>
          </CSSTransition>
          <FormAddContact />
          <h2 className="titlleContact">Contacts</h2>
          <Contacts />

          <ToastContainer />
        </Container>
      </>
    );
  }
}

export default App;
