import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home'
import OurTeam from './Component/OurTeam/OurTeam';
import Login from './Component/Login/Login';
import SignUpForm from './Component/SignUpForm/SignUpForm';
import Footer from './Component/Footer/Footer';
import Parties from './Component/Parties/Parties';
import Marraiges from './Component/Marraiges/Marraiges';
import BParty from './Component/BParty/Bparty';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={
       <>
       <Layout/>
       <Footer/>
       </>
      }>  
       <Route path="/" element={<Home/>}/>
       <Route path="OurTeam" element={<OurTeam/>}/>
       <Route path="Login" element={<Login/>}/> 
       <Route path="SignUpForm" element={<SignUpForm/>}/> 
       <Route path="Parties" element={<Parties/>}/>  
       <Route path="Marraiges" element={<Marraiges/>}/>  
       <Route path="BParty" element={<BParty/>}/>  
     </Route>
   </Routes>
    </Router>
  );
}

export default App;
