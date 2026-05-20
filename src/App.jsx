import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {


  return (
    <>
    <BrowserRouter>
      <NavbarRB />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Saludo desde el ItemListContainer" />}/>
        <Route path='/category/:type' element={<ItemListContainer saludo="Estamos en las categorias" />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
