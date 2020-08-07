import {api} from "../api/api";

const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 100,
    page: 1,
    pageCount: 10,
    maxGrade: 5,
    minGrade: 0,
    sortName: '',
    sortPacks: 0,
};

const PacksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PACK_SUCCESS':
            return {
                ...state,
                cardPacks: action.cardPacks
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                page: action.page
            };
        case 'SET_PAGE_COUNT':
            return {
                ...state,
                pageCount: action.pageCount
            };
        case  'SET_PACK_TOTAL_COUNT':
            return {
                ...state,
                cardPacksTotalCount: action.totalCount
            };
        case 'ADD_PACK_SUCCESS':
            return {
                ...state,
                cardPacks: [
                    action.newCardsPack,
                    ...state.cardPacks]
            };
        case 'DELETE_PACK_SUCCESS':
            return {
                ...state,
                cardPacks: state.cardPacks.filter(pack => pack._id !== action.packId)
            };
        case 'UPDATE_PACK_SUCCESS':
            return {
                ...state,
                cardPacks: state.cardPacks.map(pack => {
                    if (pack._id !== action.packId) {
                        return pack
                    } else {
                        return {
                            ...pack,
                            ...action.obj
                        }
                    }
                })
            };

        default:
            return state
    }
};

export const setSortPacks = (sortPacks)=>({
    type: 'SET_SORT_PACKS',
    sortPacks
});
export const setSearchPacks = (sortName)=>({
    type: 'SET_SEARCH_PACKS',
    sortName
});

export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    page
});
export const setPageCountSuccess = (pageCount) => ({
    type: 'SET_PAGE_COUNT',
    pageCount
});
const setPackTotalCount = (totalCount) => ({
    type: 'SET_PACK_TOTAL_COUNT',
    totalCount
});


export  const setCountPacks=(count)=>(
    {
        type :'SET_COUNT_PACKS',
        count
})

// export const setPageCount = (pageCount) => (dispatch, getState) => {
//     const token = localStorage.getItem('token');
//     const page = getState().packs.page;


const setPacksSuccess = (cardPacks) => (
    {
        type: 'SET_PACK_SUCCESS',
        cardPacks
    }
);
const addPackSuccess = (newCardsPack) => ({
    type: 'ADD_PACK_SUCCESS',
    newCardsPack
});

const deletePackSuccess = (packId) => (
    {
        type: 'DELETE_PACK_SUCCESS',
        packId
    }
);

const updatePackSuccess = (packId, obj) => ({
    type: 'UPDATE_PACK_SUCCESS',
    cardsPack_id: packId,
    obj
});




export const setPacks = () => (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const {pageCount, page} = getState().packs;
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

export const addPack = (newCardsPack) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.addPack(newCardsPack, token).then(res => {
        let cardsPack = res.newCardsPack;
        dispatch(addPackSuccess(cardsPack));
        localStorage.setItem('token', res.token);
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const deletePack = (packId) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.deletePack(token, packId).then(res => {
        dispatch(deletePackSuccess(packId));
        localStorage.setItem('token', res.token);
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
export const updatePack = (cardsPack, obj) => (dispatch) => {
    const token = localStorage.getItem('token');
    api.updatePack(cardsPack, obj, token).then(res => {
        dispatch(updatePackSuccess(cardsPack._id, obj));
        localStorage.setItem('token', res.token);
        dispatch(setPacks())
    }).catch(error => {
        localStorage.setItem('token', error.response.data.token)
    })
};
// export const setPacksSearch = (name)=>(dispatch)=>{
//     const token = localStorage.getItem('token');
//     api.
// };

export default PacksReducer