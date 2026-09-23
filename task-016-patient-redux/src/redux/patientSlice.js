import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name: "patients",

    initialState: {
        patients: [],
    },

    reducers: {
        // state is the current state of the slice, action is the action object dispatched to the reducer
        addPatient: (state, action) => {
            state.patients.push(action.payload);
        },

        deletePatient: (state, action) => {
            state.patients.splice(action.payload, 1);
        },
    },
});

export const { addPatient, deletePatient } = patientSlice.actions;

export default patientSlice.reducer;