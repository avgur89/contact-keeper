import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, isLoading } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
