import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mysterious-lowlands-92634.herokuapp.com/'
    }),
    endpoints: (build) => ({
        getFilms: build.query({
            query: () => 'films'
        }),
        getFilmById: build.query({
            query: (id: string) => ({
                url: `films/${id}`
            })
        })
    })
})
