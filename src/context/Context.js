import { createContext, useReducer } from 'react'
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  eroor: false,
}

export const Context = createContext(INITIAL_STATE)

export const ContexProvider = ({ children }) => {}
