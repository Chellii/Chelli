import './styles/App.css';
import Home from './pages/Home'
import Footer from './Components/Footer';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
      <div className="App">
        <div className='app--container'>
          <Header />
          <Home />
        </div>
        <Footer />
        </div>
  );
}

export default App;
