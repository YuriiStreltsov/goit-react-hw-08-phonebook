import axios from 'axios';
import contactsActions from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  try {
    const response = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const operations = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default operations;
