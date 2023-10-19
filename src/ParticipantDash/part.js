// import logo from './logo.svg';
import './part.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'



function part() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default part;
