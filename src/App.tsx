import React from 'react';
import { sessionsApi } from 'Store/sessionsApi'
import Navbar from 'Components/Navbar/Navbar'
import Header from 'Components/Header/Header'
import Movie from "Components/Movie/Movie";

import poster1 from 'Assets/Images/poster1.jpg'
import poster2 from 'Assets/Images/poster2.jpg'
import {filmsApi} from "./Store/filmsApi";

function App() {
    const { data: data_1 = [], isLoading: isSessionsLoading } = sessionsApi.useGetSessionsQuery('')
    const { data: { films } = [], isLoading, isError, isSuccess, error } = filmsApi.useGetFilmsQuery('')
    // console.log({ films })
    return (
        <>
            <Header/>
            <Navbar/>
            <main>
                {isLoading && <h1>Loading films...</h1>}
                {isError && <h1>Произошла ошибка {error}</h1>}
                {isSuccess && films.map((film: any) =>
                    <Movie film={film}/>
                )}
            </main>
        </>
    );
}

export default App;
