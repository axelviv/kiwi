import './App.css';
import Navegacion from './components/Navegacion';
import Unirse from './components/Unirse';
import Opciones from './components/Opciones';
import Comentarios from './components/Comentarios';
import Empresas from './components/Empresas';
import Planes from './components/Planes';
import Contacto from './components/Contacto';
import Correo from './components/Correo';
import Copy from './components/Copy';


function App() {
  return (

    <div className="App">

      <header className="App-header">

        <navbar>
          <Navegacion />
        </navbar>  

      </header>  

      <main className="App-main">

        <section className="App-unirse">
          <Unirse />
        </section>

        <section className="App-opciones">
          <Opciones />
        </section>

        <section className="App-comentarios">
          <Comentarios />
        </section>

        <section className="App-empresas">
          <Empresas />
        </section>

        <section className="App-planes">
          <Planes />
        </section>

        <section className="App-contacto">
          <Contacto />
        </section>

        <section className="App-correo">
          <Correo />
        </section>

      </main>

      <footer>
        <Copy />
      </footer>
      
    </div>
  );
}

export default App;
