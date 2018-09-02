import { combineReducers } from 'redux'

// reducers
import counterReducer from './counterReducer'
import headerReducer from './headerReducer'

export default combineReducers({
    counterReducer,
    headerReducer
})