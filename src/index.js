import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('SELECT_MOVIE_DESCRIPTION', selectMovieDescription);
    yield takeEvery('SELECT_MOVIE_GENRE', selectMovieGenre)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* selectMovieGenre (action) {
    try{
        const movie = action.payload;
        console.log('fetching movie genre ', movie.title);
        const movieGenre = yield axios.get(`/api/genre/details/${movie.id}`)
        // send to reducer
        yield put({ type: 'SET_MOVIE_GENRE', payload: movieGenre.data })
    } catch (err) {
        console.log('error in fetching genre ', err);
    }
}

function* selectMovieDescription (action) {
    // specific movie details from db, given ID
    try {
        const movie = action.payload;
        console.log('Fetching movie description', movie.title);
        const movieDetails = yield axios.get(`/api/movie/details/${movie.id}`)
        // send to reducer
        yield put({ type: 'SET_MOVIE_DESCRIPTION', payload: movieDetails.data })
    } catch (err) {
        console.log('Error fetching description', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovieDescription = (state = {}, action) => {
    switch(action.type) {
        // case 'SET_MOVIE_GENRE':
        //     return {...state, genre: action.payload};
        case 'SET_MOVIE_DESCRIPTION':
            return {...state, 
                title: action.payload.title,
                description: action.payload.description    
            };
        default:
            return state;
    }
}

const selectedMovieGenres = (state = [], action) => {
    switch(action.type) {
        case 'SET_MOVIE_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovieDescription,
        selectedMovieGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
