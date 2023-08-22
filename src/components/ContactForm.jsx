import React, { useState } from 'react';
import css from './ContactForm.module.css';
import propTypes from 'prop-types';

const ContactForm = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() !== '') {
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingContact) {
        alert(`${name} is already in contacts.`);
      } else {
        onAddContact({ name: name.trim(), number });
        setName('');
        setNumber('');
      }
    }
  };

  return (
    <div className={css.contactForm}>
      <div className={css.containerForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleNameChange}
          className={css.input}
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          className={css.input}
        />
        <button className={css.button} onClick={handleAddContact}>
          Add contact
        </button>
      </div>
    </div>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  contacts: propTypes.array.isRequired,
  onAddContact: propTypes.func.isRequired,
};
