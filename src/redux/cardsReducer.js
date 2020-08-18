import {api} from "../api/api";

const initialState = {
    cards: [],
    cardsTotalCount: 3,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 4,
    grade: 0
};
const CardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS_SUCCESS':
            return {
                ...state,
                cards: action.cards
            };

        case 'DELETE_CARD_SUCCESS':
            return {
                ...state,
                cards: state.cards.filter(c => c._id !== action.cardId)
            };

        case 'UPDATE_CARD_SUCCESS':
            debugger
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card._id !== action.cardId) {
                        return card
                    } else {
                        // return action.obj/                        return {
                            ...card,
                            ...action.obj
                        }
                    }
                })
            };
        case 'UPDATE_CARD_GRADE_SUCCESS':
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card._id !== action.cardId) {
                        return card
                    } else {
                        return {
                            ...card,
                            ...action.grade
                        }
                    }
                })
            };
        default:
            return state
    }
};

const setCardsSuccess = (cards) => ({
    type: 'SET_CARDS_SUCCESS',
    cards
});

const deleteCardSuccess = (cardId) => ({
    type: 'DELETE_CARD_SUCCESS',
    cardId
});
const updateCardSuccess = (cardId, obj) => ({
    type: 'UPDATE_CARD_SUCCESS',
    cardId,
    obj
});


export const setCards = (packId) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.getCards(token, packId)
        .then(res => {
            dispatch(setCardsSuccess(res.data.cards));
            localStorage.setItem('token', res.data.token);
        }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const addCard = (newCard) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.addCard(newCard, token).then(res => {
        localStorage.setItem('token', res.token);
        dispatch(setCards(newCard.cardsPack_id))
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const deleteCard = (cardId) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.deleteCard(token, cardId).then(res => {
        dispatch(deleteCardSuccess(cardId));
        localStorage.setItem('token', res.token);
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const updateCard = (card, obj) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.updateCard(card, token, obj).then(res => {
        dispatch(updateCardSuccess(card._id, obj));
        localStorage.setItem('token', res.token);
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const updateCardGrade = (cardId, grade) => (dispatch) => {
    debugger
    const token = localStorage.getItem('token');
    api.updateCardGrade(cardId, grade, token)
        .then(res => {

            dispatch(updateCardSuccess(cardId, res.updatedGrade));
            localStorage.setItem('token', res.token);
        }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
}

export default CardsReducer