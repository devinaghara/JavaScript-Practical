import './App.css';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import HomePages from './Pages/HomePages';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
