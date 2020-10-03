const initialState = {
    authResponse: null,
    user: null,
    isLoading:false,
    isAuthed:false
} ;


const AuthReducer = (state=initialState, action) =>{
        switch (action.type) {
          case "MISMATCH_PASSWORD":
            return {
              ...state,
              authResponse: "Passwords do not match",
            };

          case "TOGGLE_IS_LOADING":
            return {
              ...state,
              isLoading: !state.isLoading,
            };

          case "SIGNUP_SUCCESS":
            return {
              ...state,
              authResponse: "Sign up was successfull",
              user: action.payload,
              isAuthed: true,
            };
          case "CODE_ERROR":
            return {
              ...state,
              authResponse: "Action Could not be Completed",
            };
          case "SIGNUP_ERROR":
            return {
              ...state,
              authResponse: action.payload,
            };

          case "LOGOUT_ERROR":
            return {
              ...state,
              authResponse: action.payload,
            };
          case "LOGIN_SUCCESS":
            return {
              ...state,
              authResponse: "Login up was successfull Redirecting You to Home",
              user: action.payload,
              isAuthed: true,
            };
          case "LOGOUT_SUCCESS":
            return {
              ...state,
              authResponse: "Successfully Logged Out",
              user: [],
              isAuthed: false,
            };
          default:
            return state;
        }
}

export default AuthReducer;