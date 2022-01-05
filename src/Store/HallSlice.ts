import { createSlice } from "@reduxjs/toolkit";

type IState = {
    hall: any
    filmId: string
    session: string
    places: Array<Array<string>>
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
        }
    }
})

export const { setActiveHall, setFilmId, setSessionTime } = HallSlice.actions

export default HallSlice.reducer
