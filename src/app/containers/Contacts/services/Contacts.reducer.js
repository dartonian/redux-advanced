import enums from './Contacts.enums';

const initialState = {
    name : '',
    message : ''
};

function contactsReducer (state = initialState, action) {

    switch(action.type) {
        case enums.NAME_UPDATE:
            return {
                ...state,
                name : action.name
            };
        case enums.MESSAGE_UPDATE:
            return {
                ...state,
                message : action.message
            };
        case enums.RESET:
            return Object.assign(state,initialState);

        default:
            return state;
    }
}

export default contactsReducer;