import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mysterious-lowlands-92634.herokuapp.com/'
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
