const enums = {
    initialState : {
        name : '',
        message : '',
        posts: null,
        waiting: false
    },
    RESET : 'RESET',
    NAME_UPDATE : 'NAME_UPDATE',
    MESSAGE_UPDATE : 'MESSAGE_UPDATE',
    REQUEST_SEND : 'REQUEST_SEND',
    REQUEST_POSTS: 'REQUEST_POSTS',
    LOAD_POSTS: 'LOAD_POSTS'

};

export default enums;