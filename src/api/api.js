import axios from 'axios';

export const baseURL='https://neko-back.herokuapp.com/2.0';

export const instance = axios.create({
    baseURL,
    withCredentials:true,
});
export const api = {
    //login
    login(email, password, rememberMe) {
        return instance.post(`/auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    logautMe(){
        return instance.delete(`/auth/me`,{});
      },

    //registration
    registration(email, password) {
        return instance.post(`/auth/register`, {
            email: email,
            password: password
        })
    },

    //forgot
    forgot(email) {
        return instance.post(`/auth/forgot`, {
            email: email,
            from:'<mahanasty@mail.ru>',
            message:`<div style="background-color: lime; padding: 15px">
                     password recovery link: 
                    <a href='http://localhost:3000/#/setNewPassword/$token$'>
                    link</a></div>`
         // html1: "<a href='http://localhost:3000/#/setNewPassword/",
        // html2: "'>fdsfdsfdsf</a>"
        })
    },

    setNewPassword(newPassword,token){
        return instance.post(`/auth/set-new-password`,{
            password:newPassword,
            resetPasswordToken:token
        })
    },

    //authMe
    authMe(token) {
        return instance.post(`/auth/me`, {token: token})
    },

    //packs

    getPacks(page, pageCount, token, packName, sortPacks) {
        return instance.get(`/cards/pack?page=${page}&pageCount=${pageCount}&token=${token}&packName=${packName}&sortPacks=${sortPacks}`)
    },
    // addPack(cardsPack, token) {
    //     return instance.post(`/cards/pack `, {cardsPack: cardsPack, token: token}).then(res => res.data)
    // },
    addPack(cardsPackName, token) {
        return instance.post(`/cards/pack `, {cardsPack:{name: cardsPackName}, token: token}).then(res => res.data)
    },
    deletePack(token, id) {
        return instance.delete(`/cards/pack?token=${token}&id=${id}`).then(res => res.data)
    },
    updatePack(cardsPack, obj, token) {
        return instance.put(`/cards/pack`, {cardsPack: {...cardsPack, ...obj}, token: token}).then(res => res.data)
    },

    //cards

    getCards(token, packId) {
        return instance.get(`/cards/card?token=${token}&cardsPack_id=${packId}`)
    },
    addCard(card, token) {
        return instance.post(`/cards/card`, {card: card, token: token}).then(res => res.data)
    },
    deleteCard(token, id) {
        return instance.delete(`/cards/card?token=${token}&id=${id}`).then(res => res.data)
    },
    updateCard(card, token, obj) {
        return instance.put(`/cards/card`, {card: {...card, ...obj}, token: token}).then(res => res.data)
    },
    updateCardGrade(cardId, grade, token) {
        return instance.put(`/cards/grade`, {card_id: cardId, grade: grade, token: token})
            .then((res => {
                return res.data
            }))
    },
    sendFile(avatar){
        return  instance.put(`/auth/me`,{avatar:avatar})
    }
};

export const getFile = (baseURL, fileName) => {
    // запросить файл
    axios.get(baseURL, {responseType: 'blob'}) // !!! responseType: 'blob'
        .then(({data}) => {
            const blob = new Blob([data], {type : 'image/jpeg'});
            console.log(blob)

            // создать ссылку на файл
            const downloadUrl = window.URL.createObjectURL(blob);

            // создать тег "ссылка" на наш файл
            const link = document.createElement('a');
            link.href = downloadUrl;

            // добавить атрибуты нашему тегу: загрузочный, имя файла
            link.setAttribute('download', fileName);

            // добавить тег в документ
            document.body.appendChild(link);

            // нажать на ссылку
            link.click();

            // удалить тег из документа
            link.remove();
        });
};
//
export const writeFile = (fileName, value) => {
    const link = document.createElement("a");
    link.href = "data:text/plain;content-disposition=attachment;filename=file," + value;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



