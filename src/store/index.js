import {createStore, combineReducers, applyMiddleware} from 'redux'
import { cashReducer } from './reducer/cashReducer'
import { customerReducer } from './reducer/customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReduser = combineReducers({
   cash: cashReducer,
   customers: customerReducer
})

//Праметр: редюсер, middleware - в данном случае инструмент разработчика
export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
