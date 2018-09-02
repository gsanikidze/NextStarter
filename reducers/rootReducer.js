import { combineReducers } from 'redux'

// reducers
import counterReducer from './counterReducer'
import headerReducer from './headerReducer'

const rootReducer = combineReducers({
    counterReducer,
    headerReducer
})

export default rootReducer