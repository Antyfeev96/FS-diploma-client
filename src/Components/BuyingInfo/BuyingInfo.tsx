import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "Hooks/redux";
import {filmsApi} from "Store/filmsApi";

function BuyingInfo() {
    const navigate = useNavigate()
    const { hall, filmId, session } = useAppSelector(state => state.hallState)
    const { data: dataFilm = [], isLoading: isFilmLoading, isSuccess: isFilmSuccess } = filmsApi.useGetFilmByIdQuery(filmId)

    useEffect(() => {
        if (filmId === '') {
            navigate('/home')
        }
    }, [hall])

    return (
        <div className="buying__info">
            <div className="buying__info-description">
                <h2 className="buying__info-title">
                    {isFilmLoading && 'Загружаем фильм'}
                    {isFilmSuccess && dataFilm.film.name}
                </h2>
                <p className="buying__info-start">Начало сеанса: {session}</p>
                <p className="buying__info-hall">{hall.name}</p>
            </div>
            <div className="buying__info-hint">
                <p>Тапните дважды,<br/>чтобы увеличить</p>
            </div>
        </div>
    );
}

export default BuyingInfo;
