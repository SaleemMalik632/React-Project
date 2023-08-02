import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Shoesitem from './Component/Shoesitem';
import Apidate from './BackendApi';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/Shoes" element={<Shoesitem />} />
          <Route path="/T-Shirts" element={<Apidate />} />
          <Route path="/about" element={'< Text abouts  />'} />
          <Route path="/New" element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
