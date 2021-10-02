// TO DO: import react, useState, set up form, useHistory, 
//  saga post to movies DB, ...
// import MUI buttons, dropdown for genre
import React, { useState } from 'react';

function AddMovie () {

    return( 
        <div>
        <h2>Lets include a form to add a movie!</h2>
        <form onSubmit={handleSubmit}>
            <input required type="text" />
            <button type="submit">Add Movie</button>
        </form>
        </div>
    )
}

export default AddMovie;