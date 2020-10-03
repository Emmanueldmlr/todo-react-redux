import {SignUpService} from '../services/AuthService'
import {LoginService} from '../services/AuthService'
import {LogOutService} from '../services/AuthService'

export const signUp = (credentials,history) => {
    return (dispatch)=>{
        dispatch({
          type: "TOGGLE_IS_LOADING",
        });

        if (credentials.password !== credentials.confirmPassword) {
            dispatch({
                type: "MISMATCH_PASSWORD",
            });

            dispatch({
                type: "TOGGLE_IS_LOADING",
            });
          return
        }
        SignUpService(credentials)
          .then((res) => {
            if (res.success) {
              localStorage.setItem("token", res.token);
              dispatch({
                type: "SIGNUP_SUCCESS",
                payload: res.user,
              });

              dispatch({
                type: "TOGGLE_IS_LOADING",
              });
              setTimeout(() => {
                  history.push("/");
              }, 3000);
            } else {
                localStorage.removeItem('token')
              dispatch({
                type: "SIGNUP_ERROR",
                payload: res.error,
              });
              dispatch({
                type: "TOGGLE_IS_LOADING",
              });
            }
          })
          .catch((error) => {
             localStorage.removeItem("token");
            dispatch({
              type: "CODE_ERROR",
              payload: error,
            });
            dispatch({
              type: "TOGGLE_IS_LOADING",
            });
          });
    }
}

export const login = (credentials,history) => {
    return (dispatch)=>{
        dispatch({
          type: "TOGGLE_IS_LOADING",
        });
        LoginService(credentials,history)
          .then((res) => {
            if (res.success) {
              localStorage.setItem("token", res.token);
              dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.user,
              });

              dispatch({
                type: "TOGGLE_IS_LOADING",
              });

              setTimeout(() => {
                history.push("/");
              }, 3000);

            } else {
              localStorage.removeItem("token");
              dispatch({
                type: "SIGNUP_ERROR",
                payload: "Invalid Login Details",
              });

              dispatch({
                type: "TOGGLE_IS_LOADING",
              });

            }
          })
          .catch((error) => {
            dispatch({
              type: "CODE_ERROR",
              payload: error,
            });
            dispatch({
              type: "TOGGLE_IS_LOADING",
            });
          });
    }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IS_LOADING",
    });
    LogOutService()
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("token");
          dispatch({
            type: "LOGOUT_SUCCESS",
          });

          dispatch({
            type: "TOGGLE_IS_LOADING",
          });

        } else {
          dispatch({
            type: "LOGOUT_ERROR",
            payload: res.error,
          });
          dispatch({
            type: "TOGGLE_IS_LOADING",
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "CODE_ERROR",
          payload: error,
        });
        dispatch({
          type: "TOGGLE_IS_LOADING",
        });
      });
  };
}