import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Single from '../components/Single';
import About from '../pages/About';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';


const AppRouter = () => {
    return (
    <BrowserRouter >
        <Routes>
            <Route path="/" exact element={<App/>} />
            <Route path="single/:id" element={<Single/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;