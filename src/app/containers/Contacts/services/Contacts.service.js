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

    requestSend =(e)=> {
        e.preventDefault();
        return (dispatch, getState) => {
            const state = getState();

            dispatch(this.reset());

            this._request('/auth/', {send: {
                name : state.name,
                message : state.message
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