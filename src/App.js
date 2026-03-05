import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './components/StartPage';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import FindGroups from './components/FindGroups';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/find-groups" element={<FindGroups />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;