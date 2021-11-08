// to do: useSelector to fetch movie details
//  display on dom 
// useHistory with button to navigate to add movie page
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieDetails.css'

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
            {/* {JSON.stringify(selectedMovieGenres)} */}
            <h3>{selectedMovieDescription.title}</h3>
            <img className="detail-poster" src={selectedMovieDescription.poster} alt="MoviePoster" />
            <p>{selectedMovieDescription.description}</p> 
            <ul>Genre: {selectedMovieGenres.map((genre) => (<li key={genre.genre_id}>{genre.name}</li>))}</ul>
            <button className="btn" onClick={ () => history.push("/") }>Back To Movies</button>
        </div>
    )
}

export default MovieDetails;