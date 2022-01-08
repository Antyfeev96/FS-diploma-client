import React, {ReactNode} from 'react';
import {useAppSelector} from "../../Hooks/redux";
import {filmsApi} from "../../Store/filmsApi";

interface ITicketBody {
    price?: ReactNode
    QR?: ReactNode
    paymentButton?: ReactNode
    footerText: string
}

function TicketBody({price, QR, paymentButton, footerText}: ITicketBody) {
    const {filmId, places, hall, session} = useAppSelector(state => state.hallState)
    const {data: dataFilm = [], isLoading: isFilmLoading, isSuccess: isFilmSuccess} = filmsApi.useGetFilmByIdQuery(filmId)
    return (
        <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм:
                <span className="ticket__details ticket__title">
                    {` ${dataFilm.film.name}`}
                </span>
            </p>
            <p className="ticket__info">Места:
                <span className="ticket__details ticket__chairs">
                    {places.map(({row, place}) =>
                        <>
                            <br/>
                            <span>Ряд {row + 1}, место {place + 1}</span>
                        </>
                    )}
                </span>
            </p>
            <p className="ticket__info">В зале: <span
                className="ticket__details ticket__hall">{hall.name}</span>
            </p>
            <p className="ticket__info">Начало сеанса: <span
                className="ticket__details ticket__start">{session}</span>
            </p>
            {price}
            {QR}
            {paymentButton}
            <p className="ticket__hint">{footerText}</p>
            <p className="ticket__hint">Приятного просмотра!</p>
        </div>
    );
}

export default TicketBody;
