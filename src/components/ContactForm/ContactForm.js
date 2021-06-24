import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const isNumber = number => {
    const check = /^[-+]?[0-9]+$/;
    if(number.search(check)) {
    return true;
    };
  };
  const isName = name => {
    const check = /^[A-Za-z]+$/;
    if(name.search(check)) {
    return true;
    };
  };
  const isNameExist = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  const isNumberExist = number => {
    return contacts.find(contact => contact.number === number);
  };

  const isQueryEmpty = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };
  
  const onKeyNumber = e => {
    e = (e) ? e : window.event;
    const charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return toast.warning('Please input numbers only');
    }
    return true;
  };

  const onKeyLetter = e => {
    e = (e) ? e : window.event;
    const charCode  = (e.which) ? e.which : e.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && (charCode !== 32)) {
      return toast.warning('Please input letters only');
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isNameExist(name)) {
      toast.warning('This name is already exist');
    } else if (isNumberExist(number)) {
      toast.warning('This number is already exist');
    } else if (isName(name) === true) {
      toast.error('Only letters allowed');
    } else if (isNumber(number) === true) {
      toast.error('Only numbers allowed');  
    } else if (isQueryEmpty(name, number)) {
      toast.error('Some fields are empty');
    } else {
      dispatch(addContact(name, number));
    }
    resetForm();  
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          className={s.input}
          onKeyPress={onKeyLetter} 
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
          className={s.input}
          onKeyPress={onKeyNumber} 
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTyper = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
