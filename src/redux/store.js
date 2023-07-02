import {configureStore } from '@reduxjs/toolkit'
import menuReducer from './menu'

export const store = configureStore({
    reducer:   
    { 
        menuAtivo: menuReducer
    }
})