import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import { Stories } from './components/Stories';

function App() {
  return ( 
    <div className="App">
      <Header />
      <Stories />
    </div>
  );
}

export default App;
