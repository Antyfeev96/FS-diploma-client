import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "Hooks/redux";
import {ticketsApi} from "Store/ticketsApi";
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

const PaymentButton = ({ onClick }: { onClick: any }) => {
    return (
        <button onClick={onClick} className="accepting-button">
            Получить код бронирования
        </button>
    );
}

function PaymentPage() {
    const navigate = useNavigate()
    const [createTicket, { data, isLoading, isError, isSuccess }] = ticketsApi.useCreateTicketMutation({
        fixedCacheKey: 'create-ticket',
    })
    const {places, hall, session, filmId} = useAppSelector(state => state.hallState)

    const onClick = async () => {
        navigate('/ticket')
        const ticket = {
            hallId: hall._id,
            session,
            filmId,
            seats: places
        }
        await createTicket(ticket)
    }

    return (
        <main>
            <section className="ticket">
                <TicketHeader title="Вы выбрали билеты:"/>
                <TicketBody
                    price={<Price/>}
                    paymentButton={<PaymentButton onClick={onClick}/>}
                    footerText={footerText}
                />
            </section>
        </main>
    );
}

export default PaymentPage;
