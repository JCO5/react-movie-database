import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Single from '../components/Single';

const AppRouter = () => {
    return (
    <BrowserRouter >
        <Routes>
            <Route path="/" exact element={<App/>} />
            <Route path="single/:id" element={<Single/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;