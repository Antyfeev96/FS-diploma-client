import React from 'react';
import QRCode from "react-qr-code";
import styled from "styled-components";
import {ticketsApi} from "Store/ticketsApi";
import TicketHeader from "Components/TicketHeader/TicketHeader";
import TicketBody from "Components/TicketBody/TicketBody";
import Loader from "Components/Loader/Loader";

const QRBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const QR = (ticket: any) => (
    <QRBox>
        <QRCode  value={ticket}/>
    </QRBox>
)

function TicketPage() {
    const [createTicket, {data, isLoading, isError, isSuccess}] = ticketsApi.useCreateTicketMutation({
        fixedCacheKey: 'create-ticket',
    })
    return (
        <main>
            <section className="ticket">
                <TicketHeader title="Электронный билет"/>
                {isLoading && <Loader/>}
                {isSuccess && <TicketBody
                    footerText={'Покажите QR-код нашему контроллеру для подтверждения бронирования.'}
                    QR={<QR ticket="https://vk.com/mishgansta"/>}
                />}
            </section>
        </main>
    );
}

export default TicketPage;
