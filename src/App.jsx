import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Detalle from './detalle'
import Favoritos from './Favoritos'
import Home from './Home'
import Informativo from './Informativo'
import Original from './Original/Original'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Router>

  <nav className="menu">
    <li to="/">Home</li>
    <li to="7"Informativo>Informativo</li>
    <li to="/"Original>Original</li>
    <li to="/"Favoritos>Favoritos</li>
    <li to="/"Detalle>Detalle</li>
  </nav>

       <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativo">Informativo</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativo" element={<Informativo /> } />
          <Route path="/original" element={<Original /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>

</Router>

</>
  )
}

export default App
