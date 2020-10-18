import { SET_APP_THEME } from '../types';
import {Dispatch} from 'redux';

export const setAppTheme = (lightMode : boolean) => (dispatch : Dispatch) => {
    dispatch({
        type : SET_APP_THEME,
        payload : lightMode
    });
}