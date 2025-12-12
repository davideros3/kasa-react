import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Housing from './pages/Housing'
import Layout from './components/Layout';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={<About />} />
          <Route path="/appartement/:id" element={<Housing />} />
          <Route path= '404'  element={<NotFound />} />
          <Route path= '*'  element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
