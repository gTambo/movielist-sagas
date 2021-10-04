import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route exact path="/add">
          <AddMovie />
        </Route>
      </Router>
      <h2>This is a Footer!</h2>
    </div>
  );
}


export default App;
