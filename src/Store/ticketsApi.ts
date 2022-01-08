import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7070/'
    }),
    endpoints: (build) => ({
        getTickets: build.query({
            query: () => 'tickets'
        }),
        createTicket: build.mutation({
            query: (ticket) => ({
                url: '/tickets',
                method: 'POST',
                body: ticket
            })
        })
    })
})
