import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Blockchain from "./components/Blockchain";
import SignUp from "./components/SignUp";
import CreateTransaction from "./components/CreateTransaction";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blockchain />} />
        <Route path="/chain" element={<Blockchain />} />
        <Route path="/user" element={<SignUp />} />
        <Route path="/transaction" element={<CreateTransaction />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
