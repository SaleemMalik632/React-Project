import Nav from './Component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Text from './Component/Text';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route exact path="/" element={< Text />} />
          <Route path="/products" element={'< Text products  />'} />
          <Route path="/blog" element={'text this blog '} /> 
          <Route path="/about" element={'< Text abouts  />'} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
