// TO DO: import react, useState, set up form, useHistory, 
//  saga post to movies DB, ...
// import MUI buttons, dropdown for genre
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddMovie () {
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const history = useHistory();
    
    return( 
        <div>
        <h2>Lets include a form to add a movie!</h2>
        <form onSubmit={handleSubmit}>
            <input required 
                   type="text" 
                   value={newMovieTitle}
                   onChange={ (event) => setNewMovieTitle(event.target.value)}
            />
            <button type="submit">Add Movie</button>
        </form>
        </div>
    )
}

export default AddMovie;