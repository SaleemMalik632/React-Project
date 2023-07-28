import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Shoesitem from './Component/Shoesitem';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav /> 
   
        <Routes>
          <Route exact path="/" element={< Home />} /> 
          <Route path="/Shoes" element={<Shoesitem/>} />
          <Route path="/blog" element={'text this blog '} />  
          <Route path="/about" element={'< Text abouts  />'} />
          <Route path="/New" element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
