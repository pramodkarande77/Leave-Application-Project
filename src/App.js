
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage.js';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
