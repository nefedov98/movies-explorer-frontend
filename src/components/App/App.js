import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Switch } from 'react-router-dom';
// Header меняется в зависимости от isLoggedIn
// MoviesCard иконка меняется
// BurgerMenu если isOpen isMobile
function App() {
  return (
    <div className="App">
      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header isLoggedIn />
      </Route>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies del />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;


