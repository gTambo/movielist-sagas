import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItem from './MovieItem';
import { useHistory } from 'react-router-dom';

function MovieList() {
    // for navigating to AddMovie
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={ () => history.push("/add") }>Add A New Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItem key={movie.id} movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;