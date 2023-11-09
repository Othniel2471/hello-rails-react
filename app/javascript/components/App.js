import React from 'react';
import Greeting from './Greeting';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/greeting">greeting</NavLink>
      </nav>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default App;
