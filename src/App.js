import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Login/Registration/Registration';
import Checkout from './Pages/Home/Services/Checkout/Checkout';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Registration/>} />
            <Route path='*' element={<NotFound/>} />
            
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
