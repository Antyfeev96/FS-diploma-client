import React from 'react';

function TicketHeader({ title }: { title: string }) {
    return (
        <header className="ticket__check">
            <h2 className="ticket__check-title">{title}</h2>
        </header>
    );
}

export default TicketHeader;
