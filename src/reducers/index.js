import { combineReducers } from 'redux'

import cards from './cards_list'

const rootReducer=combineReducers({
    cards:cards
})

export default rootReducer