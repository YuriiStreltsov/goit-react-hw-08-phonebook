import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import './index.css';
import { ToastContainer } from 'react-toastify';
import Contacts from './views/ContactsView/Contacts';
import { routes } from './routes';
import HomePage from './views/HomePage/HomePage';
import Register from './views/Register/Register';
import LogIn from './views/Login/Login';

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.login} component={LogIn} />
            <Route path={routes.contacts} component={Contacts} />
          </Switch>
          <ToastContainer />
        </Container>
      </>
    );
  }
}

export default App;
