import React, {useEffect} from 'react';
import QRCode from "react-qr-code";
import styled from "styled-components";
import {ticketsApi} from "Store/ticketsApi";
import TicketHeader from "Components/TicketHeader/TicketHeader";
import TicketBody from "Components/TicketBody/TicketBody";
import Loader from "Components/Loader/Loader";
import {useNavigate} from "react-router-dom";

const QRBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const QR = (ticket: any) => {
    const value = JSON.stringify(ticket)

    return (
        <QRBox>
            <QRCode value={value}/>
        </QRBox>
    )
}

function TicketPage() {
    const navigate = useNavigate()
    const [, {data = [], isLoading, isSuccess}] = ticketsApi.useCreateTicketMutation({
        fixedCacheKey: 'create-ticket',
    })

    useEffect(() => {
        return () => {
            navigate('/home')
        }
    }, [navigate])

    return (
        <main>
            <section className="ticket">
                <TicketHeader title="Электронный билет"/>
                {isLoading && <Loader/>}
                {isSuccess && data.ticket && <TicketBody
                    footerText={'Покажите QR-код нашему контроллеру для подтверждения бронирования.'}
                    QR={<QR ticket={data?.ticket}/>}
                />}
            </section>
        </main>
    );
}

export default TicketPage;
