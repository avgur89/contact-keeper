import * as types from '../types';

export default (state, action) => {
    switch(action.type) {
        case types.ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case types.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case types.SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case types.CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        default:
            return state;
    }
};
