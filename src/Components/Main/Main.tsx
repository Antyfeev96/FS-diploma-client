import React, {useEffect, useState} from 'react';
import Loader from 'Components/Loader/Loader'
import Movie from "../Movie/Movie";
import {filmsApi} from "Store/filmsApi";

function Main() {
    const { data: { films } = [], isLoading, isError, isSuccess, error } = filmsApi.useGetFilmsQuery('')

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (error && 'error' in error) {
            setErrorMessage(error.error)
        }
    }, [error])

    return (
        <main>
            {isLoading && <Loader />}
            {isError && <h1>Произошла ошибка {errorMessage}</h1>}
            {isSuccess && !isError && films.map((film: any) =>
                <Movie key={film._id} film={film}/>
            )}
        </main>
    );
}

export default Main;
