import './App.css';
import Titulo from './componenetes/Titulo';
import Parrafo from './componenetes/Parrafo';
import Puntajes from './componenetes/Puntajes';
import Seleccion from './componenetes/Seleccion';
import Mensajes from './componenetes/Mensajes';
import Boton from './componenetes/Boton';

 function App() {
    return (
        <div className="App">
          <Titulo />
          <Parrafo/>
          <Puntajes/>
          <Seleccion/>
          <Mensajes/>
          <Boton/>
        </div>
      );
 }
export default App;
