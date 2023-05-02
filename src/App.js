import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signpage from './sign-in-out/Signpage'
import Landing from './LandingPage/Landing';
import Signup from './sign-in-out/Signup';
import Camplogout from './camplog/Camplogout';

import Navi from './Navigation/Navi';
import Navlogin from './Navigation/Navlogin';
import CampLogin from './camplog/CampLogin';
import Addnew from './AddNew/Addnew';
import Comment from './Add Comment/Comment';












function App() {




  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/Signpage" element={<Signpage/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path='/Camplogout' element={<Camplogout />}/>
          <Route path='/Navi' element={<Navi/>}/>
          <Route path='/Navlogin' element={<Navlogin/>}/>
          <Route path='/CampLogin' element={<CampLogin />}/>
          <Route path='/Addnew' element={<Addnew/>}/>
          <Route path='/Comment' element={<Comment/>}/>
          {/* <Route path='/Pages' element={<Pages data={data}/>}/> */}
          {/* <Route path='/Pages' element={<Pages items= {items}/>}/> */}


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
