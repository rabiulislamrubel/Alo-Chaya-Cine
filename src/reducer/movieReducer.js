
const initialState = {
    cartData: [],
};

const movieReducer = (state, action) => {
    switch(action.type){
        case 'Add_Cart_Data':{
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            }
        }

        case 'Remove_Cart_Data':{
            return {
                ...state,
                cartData: [...action.payload],
            }
        }

        default: `The ${action.type} isn't correct.`
    }
}

export {movieReducer,initialState};