import { configureStore } from '@reduxjs/toolkit'
import CookieNotificationStore from './CookieNotificationStore'

export default configureStore({
  reducer: {
    CookieNotificationStore
  },
})