import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sessionsApi = createApi({
    reducerPath: 'sessionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7070/'
    }),
    endpoints: (build) => ({
        getSessions: build.query({
            query: () => 'sessions'
        }),
        getSessionsByFilm: build.query({
            query: (id: string) => `sessions/byFilm/${id}`
        })
    })
})
