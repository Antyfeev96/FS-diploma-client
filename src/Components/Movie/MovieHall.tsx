import React from 'react';
import { Link } from 'react-router-dom'
import { useAppDispatch } from "Hooks/redux";
import {hallsApi} from "Store/hallsApi";
import { setActiveHall, setFilmId, setSessionTime } from 'Store/HallSlice'

interface IHallId {
    hallId: string,
    sessions: any
    filmId: string
}

function MovieHall({hallId, sessions, filmId}: IHallId) {
    const dispatch = useAppDispatch()
    const {data, isLoading, isError, error, isSuccess} = hallsApi.useGetHallByIdQuery(hallId)

    const onClick = (session: string) => {
        dispatch(setActiveHall(data.hall))
        dispatch(setFilmId(filmId))
        dispatch(setSessionTime(session))
    }

    return (
        <div className="movie-seances__hall">
            {isLoading && <h2>Загружаем залы...</h2>}
            {isError && <h2>Произошла ошибка {error}</h2>}
            {isSuccess &&
            <>
                <h3 className="movie-seances__hall-title">{data.hall.name}</h3>
                <ul className="movie-seances__list">
                    {sessions.map((session: string) =>
                        <li key={session} className="movie-seances__time-block">
                            <Link onClick={() => onClick(session)} to="/hall" className="movie-seances__time">{session}</Link>
                        </li>
                    )}
                </ul>
            </>}
        </div>
    );
}

export default MovieHall;
