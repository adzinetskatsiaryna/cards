import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCard, deleteCard, setCards, updateCard} from "../../redux/cardsReducer";
import {useParams} from "react-router";
import UpdateCards from "../common/updateCards";
import './cards.css'


const CardsPage = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {cards, cardsTotalCount, page, pageCount} = useSelector((store) => {
        return store.cards
    });
    useEffect(() => {
        dispatch(setCards(id))
    }, []);

//добавление карточки
    const onHandlerAddCard = useCallback(() => {
        let newCard = {
            cardsPack_id: id
        };
        dispatch(addCard(newCard))
    }, [dispatch]);

//удаление карточки
    const onHandlerDeleteCard = useCallback((cardId) => {
        dispatch(deleteCard(cardId))
    }, [dispatch]);

    // изменение карточки
    const [update, setUpdate] = useState(false);
    const activatedUpdate = () => {
        setUpdate(true)
    };
    const onHandlerUpdateCard = useCallback((card, question, answer, grade) => {
        dispatch(updateCard(card, {question: question, answer: answer, grade: grade}));
        setUpdate(false)
    }, [dispatch]);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>question</th>
                    <th>answer</th>
                    <th>Grade</th>
                    <th>
                        <button onClick={onHandlerAddCard}>Add</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {cards.map((card, i) => {
                        return (<tr key={i}>
                            <rd>{card.question}</rd>
                            <rd>{card.answer}</rd>
                            <rd>{card.grade}</rd>
                            <rd>
                                <button onClick={() => {
                                    onHandlerDeleteCard(card._id)
                                }}>delete
                                </button>
                            </rd>
                            {!update && <rd>
                                <button onClick={activatedUpdate}>update</button>
                            </rd>}
                            {update && <UpdateCards card={card} onClick={onHandlerUpdateCard}/>}
                        </tr>)
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    )
};
export default CardsPage