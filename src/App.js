
// Destructurando los componestes para ser usado aqui
import React from 'react';
// importando los componente destructuarado para evirar una linea por conponente.
import { Brand,  Navbar,Feature} from './components';
import {Blog, Features, Footer, Header,Posibility, Whatweb } from './containers';
// css tiles
import './App.css';

// Componente principal
const App = () => {
  return (
    <div className='APP'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <Whatweb />
        <Feature/>
        <Features />
        <Posibility />
        <Blog />
        <Footer />
    </div>
  )
}

export default App