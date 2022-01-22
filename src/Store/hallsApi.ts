import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hallsApi = createApi({
    reducerPath: 'hallsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mysterious-lowlands-92634.herokuapp.com/'
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
