import config from '../config'


export default {
    saveAuthToken(token){
        console.log("this is the token", token)
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    hasAuthToken() {
        console.log("this is the hasToken service")
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
    }
};