import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flags from './pages/flags/Flags';
import Add from './pages/add/Add';
import Modify from './pages/modify/Modify';
import Navigation from './components/navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Flags />} />
          <Route path="flags" element={<Flags />} />
          <Route path="add" element={<Add />} />
          <Route path="modify/:flagId" element={<Modify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
