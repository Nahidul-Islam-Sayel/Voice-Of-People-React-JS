import logo from './logo.svg';
import './App.css';
import Navigation from './Componant/Navbigation/Navigation';
import Home from './Componant/Home/Home';
import { render } from "react-dom";
import { Routes, Route, Link ,  BrowserRouter,} from "react-router-dom";
import About from './Componant/About/About';
import Complanin from './Componant/Complain/Complanin';
import Contract from './Componant/Contract us/Contract';
import Account from './Componant/Account/Account';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Componant/Account/Login';
import Help from './Componant/Imargancy Help/Help';
import News from './Componant/News/News';
import Fullnews from './Componant/Fullnews/Fullnews'
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
     
      <Route path="/about" element={<About/>} />
      <Route path="/obijug" element={<Complanin/>} />
      <Route path="/jugajug" element={<Contract/>} />
      <Route path="/amaraccount" element={<Account/>} />
      <Route path="/ajkarkobor" element={<News/>} />
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/Help" element={<Help/>}/>
      <Route path="/news/:id" element={<Fullnews/>}/>
       <Route path="/"  element={<Home />}  />
       
      </Routes>

 </BrowserRouter>
  );
}

export default App;
