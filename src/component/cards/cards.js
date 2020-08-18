import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addCard,
    deleteCard,
    setCards,
    setCardsCountSuccess,
    updateCard,
    updateCardGrade
} from "../../redux/cardsReducer";
import {useParams} from "react-router";
import UpdateCards from "../common/updateCards";
import './cards.css'
import UpdateCardsGrade from "../common/updateGrade";


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
            cardsPack_id: id,
        };
        dispatch(addCard(newCard))
    }, [dispatch]);

//удаление карточки
    const onHandlerDeleteCard = useCallback((cardId) => {
        dispatch(deleteCard(cardId))
    }, [dispatch]);

    // изменение карточки
    const [update, setUpdate] = useState(false);
    const [updateGrade, setUpdateGrade] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [selectedGrade, setSelectedGrade] = useState({});

    const activatedUpdate = (card) => {
        setSelectedCard(card)
        setUpdate(true)
    };
    const activatedGradeUpdate = (card) => {
        setSelectedGrade(card)
        setUpdateGrade(true)
    };
    const onHandlerUpdateCard = useCallback((card, question, answer) => {
        dispatch(updateCard(card, {question: question, answer: answer, grade: 1}));
        setUpdate(false)
    }, [dispatch]);

    const onHandlerUpdateGrade = useCallback((card, grade) => {
        debugger
        dispatch(updateCardGrade(card._id, grade));
        // dispatch(updateCard(card,{grade:grade}))
        setUpdateGrade(false)
    }, [dispatch]);


    return (
        <div>
            <h1>Cards</h1>
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
                {cards.map((card, i) => {
                    return (<tr
                        key={i}>
                        <td>{card.question}</td>
                        <td>{card.answer}</td>
                        {!updateGrade &&
                        <td><span onClick={()=>activatedGradeUpdate(card)}>{card.grade}</span></td>}

                        <td>
                            <button onClick={() => {
                                onHandlerDeleteCard(card._id)
                            }}>delete
                            </button>
                        </td>
                        {!update && <td>
                            <button onClick={()=> activatedUpdate(card)} >update</button>
                        </td>}

                    </tr>)
                })}
                {updateGrade && <td><UpdateCardsGrade card={selectedGrade} onClick={onHandlerUpdateGrade}/></td>}
                {update && <UpdateCards card={selectedCard} onClick={onHandlerUpdateCard}/>}
                </tbody>
            </table>
        </div>
    )
};
export default CardsPage