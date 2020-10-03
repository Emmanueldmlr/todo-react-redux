import HttpService from './HttpService'

export const SignUpService = (credentials) =>{
    const http = new HttpService();
    const signUpUrl = 'user/register'
    return http.postData(credentials, signUpUrl)
            .then(data => data)
            .catch( error => error)
}

export const LoginService = (credentials) => {
    const http = new HttpService();
    const loginUrl = "user/login";
    return http
      .postData(credentials, loginUrl)
      .then((data) => data)
      .catch((error) => error);
}

export const LogOutService = () => {
    const http = new HttpService();
    const logoutUrl = "logout";
    return http
      .getLaravelData( logoutUrl)
      .then((data) => data)
      .catch((error) => error);
}