
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import DinamicComponent from "./examples/DinamicComponent";

function App() {
 
const alumno = 'Pepe'
const alumnos = [
  'Nahuel',
  'Pamela',
  'Amir',
  'Juan'
]
  return (
    <>
     {/* <Navbar compras={100}/> */}
     <NavbarRB/>
     <ItemListContainer saludo="Bienvenidos a mi App!" alumno={alumno} students={alumnos}/>
     <DinamicComponent/>
    </>
  )
}

export default App
