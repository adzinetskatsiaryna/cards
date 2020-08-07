import {api} from "../api/api";
import {addPacksSuccess, deleteCardsPackSuccess, setPageCount} from "./packsReducer";

const initialState = {
    cards: [
    ],
    cardsTotalCount: 3,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 4
};
const CardsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_CARDS_SUCCESS':
            return{
                ...state,
                cards:action.cards
            }


        case 'DELETE_CARD_SUCCESS':
            return {
                ...state,
                cards: state.cards.filter(
                    card=> card._id !== action.cardId
                )
            }
        case 'UPDATE_CARD_SUCCESS':
            return{
                ...state,
                cards: state.cards.map(card=> {
                    if (card._id !== action.cardId) {
                        return card
                    } else {
                        return {
                            ...card,
                            card: action.obj
                        }
                    }
                })
            }


        default: return state
    }
};

export const setCardsSuccess =(cards)=>({
    type:'SET_CARDS_SUCCESS',
    cards

})


export const deleteCardSuccess =(cardId)=>({
    type:'DELETE_CARD_SUCCESS',
    cardId
})
export const updateCardSuccess =(cardId,obj)=>({
    type:'UPDATE_CARD_SUCCESS',
    cardId,
    obj
})

// thunk

export const setCards = (id) => (dispatch,getState) => {
    const token = localStorage.getItem('token');
    api.getCards(token,id)
        .then(response => {
            dispatch(setCardsSuccess(response.data.cards));
            localStorage.setItem('token', response.data.token);
        })
        .catch(error => {
            localStorage.setItem('token',  error.response.data.token);
        });
}
export  const addCard=(newCard)=>(dispatch)=>{
    const token = localStorage.getItem('token');
    api.addCard(newCard,token)
        .then(response=>{
            localStorage.setItem('token', response.token);
            dispatch(setCards(newCard.cardsPack_id));
        }).catch(error=>{
        localStorage.setItem('token',  error.response.data.token);
    })
}

export const  deleteCard=(cardId)=>(dispatch)=>{
    const token = localStorage.getItem('token');
    api.deleteCard(token,cardId)
        .then(response=>{
            dispatch(deleteCardSuccess(cardId));
            localStorage.setItem('token',  response.token);
        }).catch(error=>{
        localStorage.setItem('token',  error.response.data.token);
    })
}
 export  const updateCard=(card,obj)=>(dispatch)=>{
     const token = localStorage.getItem('token');
     api.updateCard(card,token,obj).then(response=>{
         localStorage.setItem('token',  response.token);
         dispatch(setCards(card.cardsPack_id));
     }).catch(error=>{
         localStorage.setItem('token',  error.response.data.token);
     })
 }


export default CardsReducer