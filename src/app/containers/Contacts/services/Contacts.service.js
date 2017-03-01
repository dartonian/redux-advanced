import enums from '../Contacts.enums';
let instance = null;

class ContactsService {

    constructor(){
        if(!instance){
            instance = this;
        }

        return instance;
    }

    _request = () => {
        console.log('request');
        return new Promise(function(resolve, reject){});
    };


    nameUpdate(e) {
        return {
            type : enums.NAME_UPDATE,
            name : e.target.value
        };
    }

    messageUpdate(e) {
        return {
            type : enums.MESSAGE_UPDATE,
            message : e.target.value
        };
    }

    reset() {
        return {
            type : enums.RESET
        };
    }

    requestPosts() {
        return {
            type: enums.REQUEST_POSTS
        };
    }

    receivePosts(json) {
        return {
            type: enums.LOAD_POSTS,
            posts: json.data.children.map(child => child.data),
        };
    }


    fetchPosts =()=> {
      return dispatch => {
        dispatch(this.requestPosts())
        return fetch(`http://www.reddit.com/r/frontend.json`)
          .then(res => res.json())
          .then(json => dispatch(this.receivePosts(json)))
      }
    }

    requestSend =(e)=> {
        e.preventDefault();
        return (dispatch, getState) => {
            const state = getState();

            dispatch(this.reset());

            this._request('/auth/', {send: {
                name : state.contactsReducer.name,
                message : state.contactsReducer.message
            }}).then(()=> {
                console.log('submit success');
            }).catch(()=> {
                console.log('submit failed');
            });
        }
    }
}

const contactsService = new ContactsService();

export default contactsService;