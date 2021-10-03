// TO DO: import react, useState, useEffect set up form, useHistory, 
//  saga post to movies DB, ...
// import MUI buttons, dropdown for genre
// 
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie () {
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMoviePoster, setNewMoviePoster] = useState('');
    const dispatch = useDispatch();
    const storeInstance = useSelector(store => store); 
    const { genres } = storeInstance;
    const history = useHistory();
    
    //  get genres on page load 
    useEffect( () => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    return( 
        <div>
        <h2>Lets include a form to add a movie!</h2>
        <form onSubmit={handleSubmit}>
            <input required 
                   type="text" 
                   value={newMovieTitle}
                   onChange={ (event) => setNewMovieTitle(event.target.value)}
            />
            <input required 
                   type="text" 
                   value={newMoviePoster}
                   onChange={ (event) => setNewMoviePoster(event.target.value)}
            />
            <label for="story">Tell us your story:</label>
            {/* TO DO: change this generic text area */}
            <textarea id="story" name="story"
                    rows="5" cols="33">
            It was a dark and stormy night...
            </textarea>
 
            <select className="select-genre">
            {/* TO DO: GET genres from database, map over into selector */}

            </select>
            <button type="submit">Save Movie</button>
        </form>
        <button onClick={ history.push('/')}>Back to Movies</button>
        </div>
    )
}

export default AddMovie;