import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import ShoeSHome from './Component/ShoeSHome';
import Testing from './Component/Testing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav /> 
        <Testing/>
        <Routes>
          <Route exact path="/" element={< ShoeSHome />} /> 
          <Route path="/products" element={'< Text products  />'} />
          <Route path="/blog" element={'text this blog '} /> 
          <Route path="/about" element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
