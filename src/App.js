import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/blogs' element={<Blogs/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
