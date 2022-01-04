import React from 'react';
import {hallsApi} from "Store/hallsApi";

interface IHallId {
    id: string,
    sessions: any
}

function MovieHall({id, sessions}: IHallId) {
    const {data, isLoading, isError, error, isSuccess} = hallsApi.useGetHallByIdQuery(id)

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
                            <a className="movie-seances__time">{session}</a>
                        </li>
                    )}
                </ul>
            </>}
        </div>
    );
}

export default MovieHall;
