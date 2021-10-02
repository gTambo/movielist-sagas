import React from 'react';
import { Link } from 'react-router-dom';
// TODO: useHistory to navigate to Details

function MovieListItem ({ movie }) {

    return(
        <>
            <div onClick={ navToDetails }>
                <h3><Link to="/details">{movie.title}</Link></h3>
                <img src={movie.poster} alt={movie.title}/>
                
            </div>
        </>
    )
}

export default MovieListItem;