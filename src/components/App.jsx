import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import './App.css';

import PhoneList from './PhoneList';
import PhoneForm from './InputForm';
import Filter from './Filter';
import initialContacts from '../data/contacts.json';

const App = props => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) =>
    contacts.some(contact => name === contact.name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(5), name, number },
        ]);

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const findContactsByName = event => setFilter(event.currentTarget.value);

  const filterContactList = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="App">
      <h2 className="App-title">Phonebook</h2>
      <PhoneForm onAddContact={handleAddContact} />
      <h2 className="App-title">Contacts</h2>
      <Filter contactName={filter} onFindContact={findContactsByName} />
      <PhoneList
        contacts={filterContactList()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
