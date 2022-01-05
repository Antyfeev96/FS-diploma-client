import { createSlice } from "@reduxjs/toolkit";

type IState = {
    hall: any
    filmId: string
    session: string
    places: Array<any>
}

const initialState = {
    hall: {},
    filmId: '',
    session: '',
    places: [],
} as IState

const HallSlice = createSlice({
    name: 'hall',
    initialState,
    reducers: {
        setActiveHall: (state, action) => {
            state.hall = action.payload
        },
        setFilmId: (state, action) => {
            state.filmId = action.payload
        },
        setSessionTime: (state, action) => {
            state.session = action.payload;
        },
        addSelectedPlace: (state, action) => {
            state.places.push(action.payload)
        },
        deleteSelectedPlace: (state, action) => {
            const { row, place } = action.payload
            state.places = state.places.filter(statePlace => statePlace.row !== row || statePlace.place !== place)
        },
        resetState: () => initialState
    }
})

export const { setActiveHall, setFilmId, setSessionTime, addSelectedPlace, deleteSelectedPlace, resetState } = HallSlice.actions

export default HallSlice.reducer
