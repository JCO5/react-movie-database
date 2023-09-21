import '../styles/App.css';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';
import RadioMovies from './RadioMovies';
import Footer from './Footer';
function App() {
  return (
    <>
      <MovieCarousel />
      <RadioMovies/>
      <MovieList/>
      <Footer/>
    </>
  );
}

export default App;
