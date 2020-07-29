import axios from 'axios'

export const instance = axios.create({
    baseURL: `http://localhost:7542/1.0`
});
export const api = {
    login(email, password, rememberMe){
        return instance.post(`/auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    registration(email, password){
        return instance.post(`/auth/register` , {
            email: email,
            password: password
        })
    },
    forgot(email){
        return instance.post(`/auth/forgot`, {
            email: email,
            html1: "<a href='http://localhost:3000/#/setNewPassword/",
            html2: "'>fdsfdsfdsf</a>"
        })

    },
    authMe(token){
        return instance.post( `/auth/me`, {token: token})
    }
}