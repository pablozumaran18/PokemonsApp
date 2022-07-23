import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import MenuSuperior from './componente/menuSuperior';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Pokemon from './pokemones/pokemons';
import Combate from './combate/comabte';
import Historial from './historial/historial';
import Lista from './lista/lista';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<MenuSuperior/>}>
      <Route path='/pokemon' element={<Pokemon type="text"/>} />
      <Route path='/historial' element={<Historial/>} />
      <Route path='/combate' element={<Combate/>} />
      <Route path='/lista' element={<Lista/>} />
      </Route>
      
    </Routes>

  </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
