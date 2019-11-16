import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import * as types from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '123-123-123',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Ben Howard',
                email: 'benh@gmail.com',
                phone: '324-323-865',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Jack Michael',
                email: 'jmich@gmail.com',
                phone: '145-873-193',
                type: 'professional'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = (contact) => {
        contact.id = uuid.v4();
        dispatch({ type: types.ADD_CONTACT, payload: contact });
    };

    // Delete Contact
    const deleteContact = (id) => {
        dispatch({ type: types.DELETE_CONTACT, payload: id });
    };

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({ type: types.SET_CURRENT, payload: contact });
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: types.CLEAR_CURRENT });
    };

    // Update Contact
    // Filter Contacts
    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}
        >
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;
