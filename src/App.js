import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, HashRouter, Route, Router, routes} from 'react-router-dom';
import Movie1 from './component/Movie1';
import Addmovie from './component/Addmovie';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
     <Navbar></Navbar>
    
      <Route path='/Movie1' element={<Movie1/>}></Route>
      <Route path='/addmovie' element={<Addmovie data={{moviename:'',director:'',language:'',genere:'',releaseyear:''}} 
      method="post"/>}></Route>
  
          
        
  </BrowserRouter> 

  </div>
  );
  }

export default App;
