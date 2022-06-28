import './styles/App.css';
import Home from './pages/Home'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <div className='app--container'>
        <Home />

      </div>
      <Footer />
    </div>
  );
}

export default App;
