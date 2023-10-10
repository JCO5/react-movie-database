import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import NavBar from '../components/NavBar';
import App from '../components/App';
import Single from '../components/Single';
import About from '../pages/About';
import { Favorites } from '../pages/Favorites';
import Search from '../pages/Search';
import Footer from '../components/Footer';


const AppRouter = () => {
    return (
    <GlobalProvider>
    <BrowserRouter >
    <div className='bg-gradient-to-r from-green-700 to-blue-900 text-white'>
    <NavBar/>
        <Routes>
            <Route path="*" exact element={<App/>} />
            <Route path="/single/:id" element={<Single/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </GlobalProvider>
  );
};

export default AppRouter;