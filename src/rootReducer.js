import { combineReducers } from 'redux';
import { imagesReducer } from './reducers'
export default combineReducers({
    images: imagesReducer
})