import './App.css';
// import { Link } from 'react-router-dom';
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
import Pages from './pages/Pages';


const items = [
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Mount Ulap.png',
      Tittle: 'Mount Ulap',
      Description: "One of the most famous hikes in Benguet Mt Ulap Itogon",
      button: "View Campground"
  },
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Calagus Islands.jpg',
      Tittle: 'Calagus Islands',
      Description: "A paradise of islands that can rival the white sand beauty of Boracay",
      button: "View Campground"
  },
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Onay Beach.jpg',
      Tittle: 'Onay Beach',
      Description: "This is one of the best camping sites, beautiful and pristine.",
      button: "View Campground"
  },
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Latik Riverside.jpg',
      Tittle: 'Latik Riverside',
      Description: "Philippines is one of the most dazzling countries in all Asia.",
      button: "View Campground"
  },
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Buloy Springs.jpg',
      Tittle: 'Buloy Springs',
      Description: "This is one of the best beach camping sites, beautiful and pristine.",
      button: "View Campground"
  },
  {
      Image: 'http://localhost:3000/Assets/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg',
      Tittle: 'Seven Sisters Waterfall',
      Description: "The Seven Sisters is the 39th tallest waterfall in Norway",
      button: "View Campground"
  }
];



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/Signpage" element={<Signpage/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path='/Camplogout' element={<Camplogout items = {items}/>}/>
          <Route path='/Navi' element={<Navi/>}/>
          <Route path='/Navlogin' element={<Navlogin/>}/>
          <Route path='/CampLogin' element={<CampLogin items = {items}/>}/>
          <Route path='/Addnew' element={<Addnew/>}/>
          <Route path='/Comment' element={<Comment/>}/>
          {/* <Route path='/Pages' element={<Pages items= {items}/>}/> */}


        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
