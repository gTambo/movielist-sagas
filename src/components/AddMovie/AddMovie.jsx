// TO DO: import react, useState, useEffect set up form, useHistory, 
//  saga post to movies DB, ...
// import MUI buttons, dropdown for genre
// 
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';

function AddMovie () {
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMoviePoster, setNewMoviePoster] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('')
    const dispatch = useDispatch();
    const storeInstance = useSelector(store => store); 
    const { genres, newMovie, newMovieGenre } = storeInstance;
    const history = useHistory();
    
    //  get genres on page load 
    useEffect( () => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const handleSubmit = () => {
        console.log('in submit');
        // TO DO: send all form data to database
        // push to home page
    }

    const handleGenreSelect= () => {
        console.log('In handle select: ', selectedGenre);
        dispatch({ type: 'NEW_MOVIE_GENRE', payload: selectedGenre });
    }

    return( 
        <div>
        <h2>Lets include a form to add a movie!</h2>
        <form onSubmit={handleSubmit}>
            Title: <input
                   type="text" 
                   placeholder="title"
                   value={newMovieTitle}
                   onChange={ (evt) => setNewMovieTitle(evt.target.value)}
            />
            Poster: <input 
                   type="text" 
                   placeholder="poster url"
                   value={newMoviePoster}
                   onChange={ (event) => setNewMoviePoster(event.target.value)}
            />
            <label htmlFor="story">Tell us your story:</label>
            {/* TO DO: change this generic text area */}
            <textarea className="story"
                    rows="5" cols="33"
                    defaultValue="It was a dark and stormy night..."
                    >
                    
            </textarea>
            {/* {JSON.stringify(genres)} */}
            <select className="select-genre" onChange={(event) => setSelectedGenre(event.target.value)}>
            {/* TO DO: GET genres from database, map over into selector */}
                <option >-select a genre-</option>
                {genres.map(genre => {
                    return(
                        <option key={genre.id} 
                                // data={genre}
                                 >
                            {genre.name}
                        </option>
                    )
                })}
            </select>
            <button onClick={() => handleGenreSelect()} >Add Genre</button>
            <input type="submit" value="Save Movie"/>
        </form>
        <button onClick={ () => history.push('/')}>Back to Movies</button>
        <ul>
            Genres: {newMovieGenre.map((genre, i)=>(<li key={i}>{genre}</li>))}
        </ul>
        </div>
    )
}

export default AddMovie;