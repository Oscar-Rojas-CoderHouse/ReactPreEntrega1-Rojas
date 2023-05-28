import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Panadería creada desde 1995, ofreciendo el mejor producto y servicio"/>
    </div>
  );
}

export default App;
