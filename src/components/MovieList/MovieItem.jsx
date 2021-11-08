import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// TODO: useHistory to navigate to Details

function MovieListItem ({ movie }) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const navToDetails = () => {
        // Dispatch object to reducer, passing in movie.id as payload
        dispatch({ type: 'SELECT_MOVIE_DESCRIPTION', payload: movie });
        dispatch({ type: 'SELECT_MOVIE_GENRE', payload: movie });
        history.push("/details");
    }
    
    return(
        <>
            <div classname="movie-item" onClick={ navToDetails }>
                {/* TO DO: Remove link below after navToDetails complete */}
                <h3>{movie.title}</h3>
                {/* <span className="note">click for details</span> */}
                <img src={movie.poster} alt={movie.title}/>
                
            </div>
        </>
    )
}

export default MovieListItem;