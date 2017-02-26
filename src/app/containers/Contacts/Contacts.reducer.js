import enums from './Contacts.enums';

function contactsReducer (state = enums.initialState, action) {

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
            return Object.assign(state,enums.initialState);

        default:
            return state;
    }
}

export default contactsReducer;