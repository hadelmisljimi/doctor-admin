import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    sidebarShow: (state = true, action) => state,
    sidebarUnfoldable: (state = false, action) => state,
  },
});

export default store;