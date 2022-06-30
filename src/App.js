import './styles/App.css';
import Footer from './Components/Footer';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Articles from './pages/Articles';
import './styles/index.css'

function App() {
  return (
      <div className="App">
        <div className='app--container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/articles' element={<Articles />} />
          </Routes>
        </div>
          <Footer />
        </div>
  );
}

export default App;
