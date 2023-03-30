
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Person } from './components/Person';
import { About } from './components/About';


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path='/' element={ <Header />}>
      <Route index element={<Person />} />
      <Route path='about' element={<About />} />

      </Route>
    </Routes>
   
    </BrowserRouter>
      
      
      
      </>
  );
}

export default App;
