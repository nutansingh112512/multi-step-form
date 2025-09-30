import { configureStore } from "@reduxjs/toolkit";
import { formReducer, updateForm } from "./formSlice";

const store = configureStore({
    reducer: {
        form: formReducer
    }
});

export { store, updateForm };