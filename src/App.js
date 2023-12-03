import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from './Component/Layout/Layout';
import OurTeam from './Component/OurTeam/OurTeam';
import Login from './Component/Login/Login';
import SignUpForm from './Component/SignUpForm/SignUpForm';
import Footer from './Component/Footer/Footer';

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
       <Route path="OurTeam" element={<OurTeam/>}/>
       <Route path="Login" element={<Login/>}/> 
       <Route path="SignUpForm" element={<SignUpForm/>}/>   
     </Route>
   </Routes>
    </Router>
  );
}

export default App;
