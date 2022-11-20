import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Voluntario from './Components/Voluntarios/Voluntario';
import Instituicoes from './Components/Instituicoes/Instituicoes';
import Apoiadores from './Components/Apoiadores/Apoiadores';
import Projeto from   './Components/Projeto/Projeto';
import Cadastro from './Components/Cadastro/Cadastro';
import PerfilOng from './Components/PerfilOng/PerfilOng';

function App() {
      return (
            <>
            <Router>
                  <Header />
                  <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Projeto' element={<Projeto />} />
                        <Route path='/Instituicoes' element={<Instituicoes />} />
                        <Route path='/Voluntario' element={<Voluntario />} />
                        <Route path='/Apoiadores' element={<Apoiadores />} />
                        <Route path='/Cadastro' element={<Cadastro />} />
                        <Route path='/PerfilOng' element={<PerfilOng />} />
                  </Routes>

            
                  <Footer />
            </Router>
            </>
      );
}

export default App;
