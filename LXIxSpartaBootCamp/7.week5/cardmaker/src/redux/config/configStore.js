import { configureStore } from "@reduxjs/toolkit";
import cardsSlices from "../modules/cardsSlices";

const store = configureStore({
  reducer: { cards : cardsSlices.reducer },
});

export default store;


