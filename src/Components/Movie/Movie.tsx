import React from 'react';
import MovieInfo from './MovieInfo';
import poster1 from "Assets/Images/poster1.jpg";
import MovieHalls from "./MovieHalls";

interface IMovie {
    film: object
    halls: Array<any>
}

function Movie({ film }: any) {
    const { name, description, duration, _id:id } = film
    return (
        <section className="movie">
            <MovieInfo name={name} description={description} duration={duration}/>
            <MovieHalls filmId={id}/>
        </section>
    );
}

export default Movie;
