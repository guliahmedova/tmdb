import { createSlice } from "@reduxjs/toolkit";

const translationSlice = createSlice({
  name: "translation",
  initialState: {
    lang: localStorage.getItem("lang") || "en",
    isLangChanged: false,
  },
  reducers: {
    setLangToStorage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", state.lang);
      state.isLangChanged = true;
    },
    getLangFromStorage: (state) => {
      const storedLang = localStorage.getItem("lang");
      state.isLangChanged = false;
      if (storedLang) {
        state.lang = storedLang;
      }
    },
  },
});

export const { setLangToStorage, getLangFromStorage } =
  translationSlice.actions;
export default translationSlice.reducer;
