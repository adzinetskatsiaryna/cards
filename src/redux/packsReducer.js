import {api} from "../api/api";


const initialState = {
    cardPacks: [],
    cardPacksTotalCount:100,
    minGrade:0,
    maxGrade:5,
    pageCount:10,
    page:1,

};

 const PacksReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'GET_PACKS_SUCCESS':
        return{
            ...state,
            cardPacks: action.cardPacks
        }

        case  'SET_PACK_TOTAL_COUNT':
            return {
                ...state,
                cardPacksTotalCount: action.totalCount
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                page:action.page
            }

        case 'SET_PAGE_COUNT_SUCCESS':
            return {
                ...state,
                pageCount: action.pageCount
            }
        case 'ADD_NEW_PACK':

            return {
                ...state,
                cardPacks: [action.cardsPack,...state.cardPacks]
            }
        case 'DELETE_PACK':
            return {
                ...state,
                cardPacks: state.cardPacks.filter(
                   cardPacks=> cardPacks._id !== action.id
                )
            }
        case 'UPDATE-PACK':
            return {
                ...state,
                cardPacks: state.cardPacks.map(cardsPack=>{
                    if(cardsPack._id !== action.id){
                        return cardsPack
                    }else{
                        return {
                            ...cardsPack,
                           ...action.obj
                        }
                    }
                    }

                )
            }
        case 'SET_COUNT_PACKS':
            return {
                ...state,
                pageCount:action.count
            }

        default: return state
    }
}

export const setPacksSuccess=(cardPacks)=>(
    {
     type:"GET_PACKS_SUCCESS",
        cardPacks
})
const setPackTotalCount = (totalCount) => ({
    type: 'SET_PACK_TOTAL_COUNT',
    totalCount
});
export const setCurrentPage=(page)=>(
    {
     type:'SET_CURRENT_PAGE',
        page
})

export const setPageCountSuccess =(pageCount)=>(
    {
        type:"SET_PAGE_COUNT",
        pageCount
    }

)
export const addPacksSuccess=(newCardsPack)=>(
    {type:"ADD_NEW_PACK",
    cardsPack:newCardsPack
    }
)
export const deleteCardsPackSuccess=(id)=>(
{
    type:'DELETE_PACK',
   id:id

})
export const updateCardsPackAC=(id,obj)=>(
    {
        type:'UPDATE-PACK',
        cardsPack_id:id,
        obj
})


export  const setCountPacks=(count)=>(
    {
        type :'SET_COUNT_PACKS',
        count
})

export const setPacks=(page)=>(dispatch,getState)=>{
    const token = localStorage.getItem('token');
    let pageCount= getState().packs.pageCount;
       api.getPacks(page,pageCount,token)
         .then(res=>{
             dispatch(setCurrentPage(page));
             dispatch(setPacksSuccess(res.data.cardPacks));
             dispatch(setPackTotalCount(res.data.cardPacksTotalCount));
             dispatch(setPageCountSuccess(res.data.pageCount))
         dispatch(setPacksSuccess(res.data.cardPacks));
         localStorage.setItem('token',  res.data.token);
         dispatch(setPageCount(res.data.pageCount))
     })
         .catch(error=>{
             localStorage.setItem('token',  error.response.data.token);
         })
}
 export  const addCardPacks=(newCardsPack)=>(dispatch)=>{
     const token = localStorage.getItem('token');
     api.addPack(newCardsPack,token)
         .then(response=>{
         dispatch(addPacksSuccess(response.newCardsPack));
         localStorage.setItem('token', response.token);
     }).catch(error=>{
         localStorage.setItem('token',  error.response.data.token);
     })
 }

 export const deleteCardsPack=(id)=>(dispatch)=>{
     const token = localStorage.getItem('token');
     api.deletePack(id,token,)
         .then(response=>{
             dispatch(deleteCardsPackSuccess(id));
             localStorage.setItem('token',  response.token);
         }).catch(error=>{
             localStorage.setItem('token',  error.response.data.token);
         })

 }
 export const updateCardsPack=(cardsPack,obj)=>(dispatch)=>{
     const token = localStorage.getItem('token');
     api.updatePack(cardsPack,obj,token)
         .then(response=>{
         dispatch(updateCardsPackAC(cardsPack._id,obj));
         localStorage.setItem('token',  response.token);
         dispatch(setPacks())
         }).catch(error=>{
             localStorage.setItem('token',  error.response.data.token);
         })
     }
export const setPageCount = (pageCount) => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const page = getState().packs.page;
    api.getPacks(page, pageCount, token)
        .then(res => {
            dispatch(setCurrentPage(page));
            dispatch(setPacksSuccess(res.data.cardPacks));
            dispatch(setPackTotalCount(res.data.cardPacksTotalCount));
            dispatch(setPageCountSuccess(res.data.pageCount));
            localStorage.setItem('token', res.data.token);
        }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};


export default PacksReducer;