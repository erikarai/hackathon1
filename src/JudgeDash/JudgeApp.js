// import logo from './logo.svg';
import './Judge.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import JudgeHome from './Judgecomponents/JudgeHome'



function JudgeApp() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/JudgeHome" element={<JudgeHome/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default JudgeApp;
