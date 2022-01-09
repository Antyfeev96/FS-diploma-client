import React from 'react';
import MovieInfo from './MovieInfo';
import MovieHalls from "./MovieHalls";

interface IProps {
    film: {
        name: string
        description: string
        duration: number
        _id: string
    }
}

function Movie({ film }: IProps) {
    const { name, description, duration, _id:id } = film
    return (
        <section className="movie">
            <MovieInfo name={name} description={description} duration={duration}/>
            <MovieHalls filmId={id}/>
        </section>
    );
}

export default Movie;
