import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      <br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
