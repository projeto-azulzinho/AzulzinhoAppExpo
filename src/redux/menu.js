import { createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'menuAtivo',
    initialState: {
      menuAtivo: false
    },
    reducers: {
      toggleMenu: state => {
        state.menuAtivo = !state.menuAtivo
      }
    }
  })
  
export const { toggleMenu } = counterSlice.actions
  
export default counterSlice.reducer
  
  