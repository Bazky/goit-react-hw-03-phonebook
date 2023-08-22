import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  if (contacts.length === 0 && storedContacts.length > 0) {
    setContacts(storedContacts);
  }

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleAddContact = newContact => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, contactWithId]);
    localStorage.setItem(
      'contacts',
      JSON.stringify([...contacts, contactWithId])
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <h5>Find contacts by name</h5>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;

App.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
