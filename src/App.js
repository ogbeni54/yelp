import './App.css';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signpage from './Signpage'
import Landing from './Landing';
import Signup from './Signup';
import Camplogin from './Camplogin';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/Signpage" element={<Signpage/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path='/Camplogin' element={<Camplogin/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
