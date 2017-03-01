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

        case enums.REQUEST_POSTS:
            return Object.assign({},state, {
                waiting: true
            });

        case enums.LOAD_POSTS:
            return Object.assign({},state, {
                waiting: false,
                posts: action.posts
            });

        default:
            return state;
    }
}

export default contactsReducer;