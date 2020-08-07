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
        return instance.post( `/auth/me`, {token:  token})
    },


    getPacks(page,pageCount,token){

        return instance.get(`cards/pack?page=${page}&pageCount=${pageCount}&token=${token}`);
    },

    addPack(newCardsPack,token){
        return instance.post(`cards/pack`,{cardsPack:newCardsPack,token:token}).then(res => res.data);
    },
    deletePack(id,token,){
        return instance.delete(`cards/pack?token=${token}&id=${id}`).then(res => res.data)
    },
    updatePack(cardsPack,obj,token){
        return instance.put(`cards/pack`,{cardsPack:{...cardsPack,...obj},token:token}).then(res=>res.data);
    },
    // API для cards

    getCards( token,id){
        return instance.get(`/cards/card?token=${token}&cardsPack_id=${id}`)
    },
    addCard(newCard, token){
        return instance.post(`/cards/card`,{card: newCard, token: token}).then(res=>res.data)
    },
    deleteCard(token, id){
        return instance.delete(`/cards/card?token=${token}&id=${id}`).then(res=>res.data)
    },
    updateCard(card, token,obj){
        return instance.put(`/cards/card`,{card:{...card,...obj}, token:token}).then(res=>res.data)
    }
}