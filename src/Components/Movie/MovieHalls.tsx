import React, {useEffect, useState} from 'react';
import MovieHall from "./MovieHall";
import { sessionsApi } from "Store/sessionsApi";

function MovieHalls({ filmId }: { filmId: string }) {
    const { data = [], isLoading, isError, error, isSuccess } = sessionsApi.useGetSessionsByFilmQuery(filmId)

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (error && 'error' in error) {
            setErrorMessage(error.error)
        }
    }, [error])

    return (
        <>
            {isLoading && <h2>Загружаем свободные сеансы...</h2>}
            {isError && <h2>Произошла ошибка {errorMessage}</h2>}
            {isSuccess && data.sessions.length === 0 && <h2>Нет билетов</h2>}
            {isSuccess && Object.entries(data.halls).length > 0 && Object.entries(data.halls).map(([key, value]) =>
                <MovieHall key={key} filmId={filmId} hallId={key} sessions={value}/>
            )}
        </>
    );
}

export default MovieHalls;
