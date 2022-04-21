import './index.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Service from './views/Service'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
