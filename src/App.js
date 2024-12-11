import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;

