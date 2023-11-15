import {useState} from "react";

const TOKEN_LOGIN = "tokenLogin";

function getToken() {
    const tokenString = localStorage.getItem(TOKEN_LOGIN);
    return JSON.parse(tokenString)
}

function removeToken() {
    localStorage.removeItem(TOKEN_LOGIN);
}

function useToken() {

    const [token, setToken] = useState(getToken());

    function saveToken(tokenLogin) {
        localStorage.setItem(TOKEN_LOGIN, JSON.stringify(tokenLogin));
        setToken(tokenLogin.token)
    }

    return {
        setToken: saveToken,
        token
    }
}

export {useToken, getToken, removeToken}