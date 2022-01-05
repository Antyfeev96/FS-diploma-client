import React, {useEffect} from 'react';
import {useAppSelector} from "Hooks/redux";
import {hallsApi} from "Store/hallsApi";
import Header from "Components/Header/Header";
import {filmsApi} from "../../Store/filmsApi";
import {useNavigate} from "react-router-dom";

function HallPage() {
    const navigate = useNavigate()
    const { hall, filmId, session } = useAppSelector(state => state.hallState)

    const { data: dataFilm = [], isLoading: isFilmLoading, isSuccess: isFilmSuccess } = filmsApi.useGetFilmByIdQuery(filmId)
    const { data: dataHall = [], isLoading: isHallLoading, isError, error, isSuccess: isHallSuccess } = hallsApi.useGetHallByIdQuery(hall._id)
    console.log({dataHall})

    useEffect(() => {
        if (filmId === '') {
            navigate('/home')
        }
    }, [hall])

    return (
        <>
            <Header/>
            <main>
                <section className="buying">
                    <div className="buying__info">
                        <div className="buying__info-description">
                            <h2 className="buying__info-title">
                                {isHallLoading && 'Загружаем зал'}
                                {isFilmSuccess && dataFilm.film.name}
                            </h2>
                            <p className="buying__info-start">Начало сеанса: {session}</p>
                            <p className="buying__info-hall">{hall.name}</p>
                        </div>
                        <div className="buying__info-hint">
                            <p>Тапните дважды,<br/>чтобы увеличить</p>
                        </div>
                    </div>
                    <div className="buying-scheme">
                        <div className="buying-scheme__wrapper">
                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_vip"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_selected"/>
                                <span className="buying-scheme__chair buying-scheme__chair_selected"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                                <span className="buying-scheme__chair buying-scheme__chair_disabled"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                            </div>

                            <div className="buying-scheme__row">
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_taken"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                                <span className="buying-scheme__chair buying-scheme__chair_standart"/>
                            </div>
                        </div>
                        <div className="buying-scheme__legend">
                            <div className="col">
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_standart"/> Свободно
                                    (<span
                                    className="buying-scheme__legend-value">250</span>руб)</p>
                                <p className="buying-scheme__legend-price">
                                    <span className="buying-scheme__chair buying-scheme__chair_vip"/> Свободно VIP
                                    (<span
                                    className="buying-scheme__legend-value">350</span>руб)</p>
                            </div>
                            <div className="col">
                                <p className="buying-scheme__legend-price"><span
                                    className="buying-scheme__chair buying-scheme__chair_taken"/> Занято</p>
                                <p className="buying-scheme__legend-price"><span
                                    className="buying-scheme__chair buying-scheme__chair_selected"/> Выбрано</p>
                            </div>
                        </div>
                    </div>
                    <button className="accepting-button">Забронировать</button>
                </section>
            </main>
        </>
    );
}

export default HallPage;
