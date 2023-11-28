
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicePage from './pages/Service';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
