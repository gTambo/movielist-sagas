// to do: useSelector to fetch movie details
//  display on dom 
// useHistory with button to navigate to add movie page
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails () {
    const storeInstance = useSelector(store => store);
    const { selectedMovieDescription, selectedMovieGenres } = storeInstance;
    const history = useHistory();

    // let genres = selectedMovie.genre;
    // let genres = '';    
    // for(let item in selectedMovie.genre) {
    //     genres = genres + selectedMovie.genre[item] + ', ';
    // }
    
    return (
        <div>
            <p>Details here</p>
            {JSON.stringify(selectedMovieGenres)}
            <p>{selectedMovieDescription.title}</p>
            <p>{selectedMovieDescription.description}</p> 
            <ul>{selectedMovieGenres.map((genre) => (<li key={genre.genre_id}>{genre.name}</li>))}</ul>
            <button onClick={ () => history.push("/") }>Back To Movies</button>
        </div>
    )
}

export default MovieDetails;