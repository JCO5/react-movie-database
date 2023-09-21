import '../styles/App.css';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';
import NavBar from './NavBar';
import RadioMovies from './RadioMovies';
import Footer from './Footer';
function App() {
  return (
    <div className='bg-gradient-to-r from-green-700 to-blue-900 text-white'>
      <NavBar/>
      <MovieCarousel />
      <RadioMovies/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;
