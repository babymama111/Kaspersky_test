import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import React from 'react';
import GetStarted from './pages/GetStarted';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/list" element={<GetStarted />} />
        <Route path="*" element={<NoPage />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;