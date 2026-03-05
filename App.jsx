import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './components/StartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;

