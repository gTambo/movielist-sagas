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
    const [newDescription, setNewDescription] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const dispatch = useDispatch();
    const storeInstance = useSelector(store => store); 
    const { genres, newMovie, newMovieGenre } = storeInstance;
    const history = useHistory();
    
    //  get genres on page load 
    useEffect( () => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    let movieToAdd = {
        genres: newMovieGenre,
        title: newMovieTitle,
        poster: newMoviePoster,
        description: newDescription
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in submit', movieToAdd);
        // TO DO: send all form data to database
        dispatch({type: 'ADD_MOVIE', payload: movieToAdd})
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
            <label htmlFor="story">Synopsis:</label>
            {/* TO DO: change this generic text area */}
            <textarea className="story"
                    rows="5" cols="33"
                    placeholder="Movie description here"
                    value={newDescription}
                    onChange={(event) => setNewDescription(event.target.value)}
                    >
                    
            </textarea>
            {/* {JSON.stringify(genres)} */}
            
            <input type="submit" value="Save Movie"/>
        </form>
        <select className="select-genre" onChange={(event) => setSelectedGenre(event.target.value)}>
            {/* TO DO: GET genres from database, map over into selector */}
                <option >-select a genre-</option>
                {genres.map(genre => {
                    return(
                        <option key={genre.id} 
                                // value={genre}
                                 >
                            {genre.name}
                        </option>
                    )
                })}
            </select>
            <button onClick={() => handleGenreSelect()} >Add Genre</button>
            <button onClick={ () => history.push('/')}>Back to Movies</button>
        <ul>
            Genres: {newMovieGenre.map((genre, i)=>(<li key={i}>{genre}</li>))}
        </ul>
        </div>
    )
}

export default AddMovie;