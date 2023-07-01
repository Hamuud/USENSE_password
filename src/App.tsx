import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import CreatePassword from './Pages/CreatePassword';
import GeneratePassword from './Pages/GeneratePassword/GeneratePassword';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="starter">
        <Routes>
          <Route path="/" element={<CreatePassword />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/generator" element={<GeneratePassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
