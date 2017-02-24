//Model. Enum of Actions
const EAction = {
   FORM_AUTH_LOGIN_UPDATE    : "FORM_AUTH_LOGIN_UPDATE",
   FORM_AUTH_PASSWORD_UPDATE : "FORM_AUTH_PASSWORD_UPDATE",
   FORM_AUTH_RESET           : "FORM_AUTH_RESET",
   FORM_AUTH_AUTOFILL        : "FORM_AUTH_AUTOFILL"
};

//Model. Cookies
let cookies = {};

//Model. Reducer
export function reducer(state = {
    login : "",
    password : ""
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

//Model. ActionCreators
export function loginUpdate(event) {
   return {
      type : EAction.FORM_AUTH_LOGIN_UPDATE,
      login : event.target.value
   };
}

export function passwordUpdate(event) {
   return {
      type : EAction.FORM_AUTH_PASSWORD_UPDATE,
      password : event.target.value
   };
}

export function reset() {
   return {
      type : EAction.FORM_AUTH_RESET
   };
}

export function tryAutoFill() {
   return function(dispatch) {
      if(cookies && (cookies.login !== undefined) && (cookies.password !== undefined)) {
         dispatch({
            type : EAction.FORM_AUTH_AUTOFILL,
            login : cookies.login,
            password : cookies.password
         });
      }  
   } 
}

const request = function() {
   console.log('request');
   return new Promise(function(resolve, reject){});
}

export function submit() {
   return function(dispatch, getState) {
      const state = getState();
      dispatch(reset());  
      request('/auth/', {send: {
          login : state.login,
          password : state.password
      }}).then(function() {
          router.push('/');
      }).catch(function() {
          window.alert("Auth failed")
      });
   }
}