import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hallsApi = createApi({
    reducerPath: 'hallsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7070/'
    }),
    endpoints: (build) => ({
        getHalls: build.query({
            query: () => 'halls'
        }),
        getHallById: build.query({
            query: (id: string) => ({
                url: `halls/${id}`
            })
        }),
        getHallRows: build.query({
            query: (id: string) => ({
                url: `halls/${id}/rows`
            })
        })
    })
})
