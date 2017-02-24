const EAction = {
   FORM_AUTH_LOGIN_UPDATE    : "FORM_AUTH_LOGIN_UPDATE",
   FORM_AUTH_PASSWORD_UPDATE : "FORM_AUTH_PASSWORD_UPDATE",
   FORM_AUTH_RESET           : "FORM_AUTH_RESET",
   FORM_AUTH_AUTOFILL        : "FORM_AUTH_AUTOFILL"
};

export default class AppModel {

   constructor(){

   }

   static cookies = {};

   request = () => {
      console.log('request');
      return new Promise(function(resolve, reject){});
   }

   reducer(state = {
      login : '',
      password : ''
   }, action) {

      switch(action.type) {
         case EAction.FORM_AUTH_LOGIN_UPDATE:
            return {
               ...state,
               login : action.login
            };
         case EAction.FORM_AUTH_PASSWORD_UPDATE:
            return {
               ...state,
               password : action.password
            };
         case EAction.FORM_AUTH_RESET:
            return {
               ...state,
               login : "",
               password : ""
            };
         case EAction.FORM_AUTH_AUTOFILL:
            return {
               ...state,
               login : action.login,
               password : action.password
            };
         default:
            return state;
      }
   }


   loginUpdate(event) {
      return {
         type : EAction.FORM_AUTH_LOGIN_UPDATE,
         login : event.target.value
      };
   }

   passwordUpdate(event) {
      return {
         type : EAction.FORM_AUTH_PASSWORD_UPDATE,
         password : event.target.value
      };
   }

   reset() {
      return {
         type : EAction.FORM_AUTH_RESET
      };
   }

   tryAutoFill() {
      return (dispatch) => {
         if(AppModel.cookies && (AppModel.cookies.login !== undefined) && (AppModel.cookies.password !== undefined)) {
            dispatch({
               type : EAction.FORM_AUTH_AUTOFILL,
               login : AppModel.cookies.login,
               password : AppModel.cookies.password
            });
         }  
      } 
   }

   submit =()=> {
      return (dispatch, getState) => {
         const state = getState();
         dispatch(this.reset());  
         this.request('/auth/', {send: {
             login : state.login,
             password : state.password
         }}).then(()=> {
             router.push('/');
         }).catch(()=> {
             window.alert("Auth failed")
         });
      }
   }
}