import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_CURRENT_USER: 
            return null;

            default:
                return state; //returns current state 

    }    
}
