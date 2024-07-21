import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import About from './components/About';
import PageNotFound from './components/ErrorPage';

function App() {

    return (
        <div className="bg-white">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App
