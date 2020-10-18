import {SET_APP_THEME} from '../types';

interface IUI{
    darkTheme : boolean
}

const initialState : IUI = {
    darkTheme : true
}

export default (state : any = initialState, action : any) => {
    switch(action.type){
        case SET_APP_THEME:
            return {
                ...state,
                darkTheme : action.payload
            }
        default:
            return state
    }
}

