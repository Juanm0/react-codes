import Navbar from "./components/Navbar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DinamicComponent from "./examples/DinamicComponent";
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";
import ComponentChildren from "./examples/ComponentChildren";
import ItemListContainer from "./components/ItemListContainer";
import FetchContainer from "./examples/FetchContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {


  return (
    <>

      <NavbarRB />

      <FetchContainer />
      <ComponentChildren>
        diablo soy el children
        <DinamicComponent tittle='Random image' description='this is fine' btn-text='no hace nada' />
      </ComponentChildren>

      <ItemDetailContainer />

      <ItemListContainer saludo="Saludo desde el ItemListContainer" />
    </>
  )
}

export default App
