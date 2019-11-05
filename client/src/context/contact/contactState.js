import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
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
        ]
    };
};
