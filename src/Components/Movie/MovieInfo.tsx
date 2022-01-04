import React from 'react';
import poster1 from "Assets/Images/poster1.jpg";

interface IMovieInfo {
    name: string
    description: string
    duration: number
}

function MovieInfo({ name, description, duration } : IMovieInfo) {
    return (
        <div className="movie__info">
            <div className="movie__poster">
                <img className="movie__poster-image" alt="Звёздные войны постер" src={poster1}/>
            </div>
            <div className="movie__description">
                <h2 className="movie__title">{name}</h2>
                <p className="movie__synopsis">{description}</p>
                <p className="movie__data">
                    <span className="movie__data-duration">{duration} минут</span>
                    &nbsp;
                    <span className="movie__data-origin">Россия</span>
                </p>
            </div>
        </div>
    );
}

export default MovieInfo;
