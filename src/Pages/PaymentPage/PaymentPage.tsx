import React from 'react';
import {useAppSelector} from "Hooks/redux";
import {filmsApi} from "Store/filmsApi";
import TicketHeader from "Components/TicketHeader/TicketHeader";
import TicketBody from "Components/TicketBody/TicketBody";

const footerText = `
    После оплаты билет будет доступен в этом окне, а также придёт вам на
    почту. Покажите QR-код нашему контролёру у входа в зал.
`

const Price = () => {
    const {places, hall} = useAppSelector(state => state.hallState)
    return (
        <p className="ticket__info">Стоимость:
            <span className="ticket__details ticket__cost">
                {places.reduce((prev, cur) =>
                    hall.prices[prev.status] + hall.prices[cur.status]
                )}
            </span> рублей
        </p>
    )
}

const PaymentButton = () => (
    <button className="accepting-button">Получить код
        бронирования
    </button>
)

function PaymentPage() {
    return (
        <main>
            <section className="ticket">
                <TicketHeader title="Вы выбрали билеты:"/>
                <TicketBody
                    price={<Price/>}
                    paymentButton={<PaymentButton/>}
                    footerText={footerText}
                />
            </section>
        </main>
    );
}

export default PaymentPage;
