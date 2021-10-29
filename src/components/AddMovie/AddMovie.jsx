// TO DO: import react, useState, useEffect set up form, useHistory, 
//  saga post to movies DB, ...
// import MUI buttons, dropdown for genre
// 
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie () {
    //  TO DO: use movieToAdd object as default state, and modify with useState
    const defaultMovie = {
        genre_id: '',
        title: '',
        poster: '',
        description: ''
    }
    // Set state form new movie details
    const [movieToAdd, setMovieToAdd] = useState(defaultMovie)
    // to send data to redux
    const dispatch = useDispatch();
    // all genres were fetched into redux store on page load 
    // in useEffect() get them from reducer 'genres'
    const storeInstance = useSelector(store => store); 
    const { genres } = storeInstance;
    // for navigating to another page
    const history = useHistory();

    //  get genres on page load 
    useEffect( () => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // on form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in submit', movieToAdd);
        // TO DO: send all form data to database
        dispatch({type: 'ADD_MOVIE', payload: movieToAdd});
        setMovieToAdd(defaultMovie);
        // push to home page
        history.push("/");
    }

    return( 
        <div>
        <h2>Add a new movie here</h2>
        <form style={{ 'marginleft': '5', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input required
                    id="title"
                    type="text" 
                    placeholder="title"
                    value={movieToAdd.title}
                    onChange={ (evt) => setMovieToAdd({...movieToAdd, title: evt.target.value})}
            />
            Poster: <input 
                    type="text" 
                    placeholder="poster url"
                    value={movieToAdd.poster}
                    onChange={ (evt) => setMovieToAdd({...movieToAdd, poster: evt.target.value})}
            />
            <label htmlFor="story">Synopsis:</label>
            <textarea className="story"
                    rows="5" cols="33"
                    placeholder="Movie description here"
                    value={movieToAdd.description}
                    onChange={ (evt) => setMovieToAdd({...movieToAdd, description: evt.target.value})}
                    >
                    
            </textarea>
            <select className="select-genre" 
                onChange={ (evt) => setMovieToAdd({...movieToAdd, genre_id: evt.target.value})}
                >
                {/* GET genres from database, map over results into selector */}
                <option>-select a genre-</option>
                {genres.map(genre => {
                    return(
                        <option key={genre.id} 
                                value={genre.id}>
                            {genre.name}
                        </option>
                    )
                })}
            </select>
            <input type="submit" value="Save Movie"/>
        </form>
        
            {/* <button onClick={() => handleGenreSelect()} >Add Genre</button> */}
            <button className="btn" onClick={ () => history.push('/')}>Cancel</button>
        </div>
    )
}

export default AddMovie;