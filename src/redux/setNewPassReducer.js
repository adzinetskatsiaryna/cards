const initialState={

};

const SetNewPasswordReducer = (state=initialState, action)=>{
    switch (action.type) {
        case '':
            return{
                ...state
            };
        default: return state
    }
};

export default SetNewPasswordReducer