import { createSlice } from '@reduxjs/toolkit'

export const CookieNotificationStore = createSlice({
  name: 'CookieNotificationStore',
  initialState: {
    showCookieNotification: true
  },
  reducers: {
    // add action as parameter to get passed value when method gets dispatched
    setCookieNotification: (state) => {
      state.showCookieNotification = !state.showCookieNotification
    }
  }
})

export const showCookieNotification = (state: any) => state.CookieNotificationStore.showCookieNotification

export const { setCookieNotification } = CookieNotificationStore.actions

export default CookieNotificationStore.reducer