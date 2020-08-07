import axios from 'axios'

export const instance = axios.create({
    baseURL: `http://localhost:7542/1.0`
});
export const api = {
    //login
    login(email, password, rememberMe){
        return instance.post(`/auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },

    //registration
    registration(email, password){
        return instance.post(`/auth/register` , {
            email: email,
            password: password
        })
    },

    //forgot
    forgot(email){
        return instance.post(`/auth/forgot`, {
            email: email,
            html1: "<a href='http://localhost:3000/#/setNewPassword/",
            html2: "'>fdsfdsfdsf</a>"
        })
    },

    //authMe
    authMe(token){
        return instance.post( `/auth/me`, {token: token})
    },

    //packs

    getPacks(page, pageCount, token, packName, sortPacks){
        debugger
        //return instance.get(`/cards/pack?page=${page}&pageCount=${pageCount}&token=${token}&packName=${packName}&sortPacks=${sortPacks}`)
        return instance.get(`/cards/pack?token=${token}page=${page}&pageCount=${pageCount}`)

    },
    addPack(cardsPack, token){
        return instance.post(`/cards/pack `, {cardsPack:cardsPack, token: token}).then(res=>res.data)
    },
    deletePack(token, id){
        return instance.delete(`/cards/pack?token=${token}&id=${id}`).then(res=>res.data)
    },
    updatePack(cardsPack, obj, token){
        return instance.put(`/cards/pack`, {cardsPack:{...cardsPack,...obj}, token: token}).then(res=>res.data)
    },

    //cards

    getCards(/*page, pageCount,*/ token, packId){
        return instance.get(`/cards/card?token=${token}&cardsPack_id=${packId}`)
    },
    addCard(card, token){
        return instance.post(`/cards/card`,{card: card, token: token}).then(res=>res.data)
    },
    deleteCard(token, id){
        return instance.delete(`/cards/card?token=${token}&id=${id}`).then(res=>res.data)
    },
    updateCard(card, token,obj){
        return instance.put(`/cards/card`,{card:{...card,...obj}, token:token}).then(res=>res.data)
    }
};

//page=${page}&pageCount=${pageCount}&