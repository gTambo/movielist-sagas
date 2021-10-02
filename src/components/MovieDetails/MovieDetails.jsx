// to do: useSelector to fetch movie details
//  display on dom 
// useHistory with button to navigate to add movie page
import { useSelector } from 'react-redux';
import { useHistory } from 'react-routrer-dom';

function MovieDetails () {
    const selectedMovie = useSelector(store => store.selectedMovie);
    const history = useHistory();

    return (
        <div>
            <p>Details here</p>
            {JSON.stringify(selectedMovie)}
            <p>{selectedMovie.description}, &nbsp; {selectedMovie.genre.map( genre => (genre))} </p>
            <button onClick={ () => history.push("/") }>Back To Movies</button>
        </div>
    )
}

export default MovieDetails;