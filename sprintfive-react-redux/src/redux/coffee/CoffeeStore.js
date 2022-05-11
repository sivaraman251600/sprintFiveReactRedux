import { createStore , applyMiddleware } from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//import { Coffeereducer } from './CoffeeReducer'
import { reducer } from '../User/UserReducer'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger,thunk)))