import Navbar from "./components/Navbar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DinamicComponent from "./examples/DinamicComponent";
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";
import ComponentChildren from "./examples/ComponentChildren";
import ItemListContainer from "./components/ItemListContainer";
import FetchContainer from "./examples/FetchContainer";


function App() {


  return (
    <>

      <NavbarRB/>
      <ItemListContainer saludo="hola"/>
      <FetchContainer/>
      <ComponentChildren>
        diablo soy el children
      </ComponentChildren>

      
      <ComponentChildren>
        <DinamicComponent/>
        
      </ComponentChildren>
      <DinamicComponent tittle = 'Random image' description = 'this is fine' btn-text='no hace nada'/>
      <DinamicComponent/>
      <DinamicComponent/>
      <DinamicComponent/>
     


      <ItemCount stock={5}/>
      
    </>
  )
}

export default App
