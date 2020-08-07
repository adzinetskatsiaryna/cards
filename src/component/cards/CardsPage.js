import React, {useCallback, useEffect, useState} from 'react';
import {addCardPacks, deleteCardsPack, setPacks} from "../../redux/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {addCard, deleteCard, setCards, updateCard} from "../../redux/cardsReducer";
import {useParams} from "react-router";
import UpdatePack from "../common/updatePack";
import UpdateCard from "../common/updateCards";

const CardsPage=(props)=>{
   const dispatch=useDispatch();
    const {id} = useParams();
    const {cards,  card,newCard,cardsTotalCount,page, pageCount} = useSelector((store) => {
        return store.cards
    });
    const [update, setUpdate] = useState(false);
    const activatedUpdate = () => {
        setUpdate(true)
    };


    useEffect(() => {
        dispatch(setCards(id))

    }, []);

    const onHendlerAddCard = useCallback(() => {
        let newCard = {
            cardsPack_id:id,
            question:'',
            answer:""
        }
        dispatch(addCard(newCard))
    }, [dispatch]);


   const  onHendlerUpdateCard=useCallback((card,question,answer,grade)=>{
       dispatch(updateCard(card,{question: question,answer:answer,grade:grade,}))
       setUpdate(false)
   }, [dispatch]);



    const onDeleteCard = useCallback((cardId) => {
        dispatch(deleteCard(cardId))
    }, [dispatch]);

    return (
        <div>
            <h1>Cards</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th> question</th>
                        <th>
                            Answer
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            <button type="button" onClick={onHendlerAddCard}>Add Cards</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cards.map((card, i) => {
                        return <tr key={i}>
                            <td>{card.question}</td>
                            <td>{card.answer}</td>
                            <td>{card.grade}</td>
                            <td>
                                <button onClick={() => onDeleteCard(card._id)}>del</button>
                            </td>
                            <td>
                                {!update && <button onClick={activatedUpdate}>update</button>}
                                {update && <UpdateCard card={card}
                                                       onClick={onHendlerUpdateCard}
                                />}
                            </td>
                        </tr>

                    })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default CardsPage;