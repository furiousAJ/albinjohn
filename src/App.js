import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addmovie from './components/Addmovie';
import Names from './components/Names';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
    <Routes>
        <Route path='/addmovie' element={<Addmovie data={{id:'',moviename:"", director:"", language:"", genre:"", releaseyear:""}} method="post"/>} />
        <Route path='/names' element={<Names/>}/>
      </Routes>     
      </BrowserRouter>
      </div>
  );
}

export default App;
