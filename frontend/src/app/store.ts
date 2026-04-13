import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UiState = {
  mobileMenuOpen: boolean
  activeServiceFilter: string
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeServiceFilter: 'all',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setActiveServiceFilter: (state, action: PayloadAction<string>) => {
      state.activeServiceFilter = action.payload
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setActiveServiceFilter } = uiSlice.actions

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
