import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Signin } from './components/Signin';
import { Login } from './components/Login';
import { Homeinner } from './components/Homeinner';
import { Losses } from './components/Losses';
import { Founds } from './components/Founds';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />}> 
             <Route path='/signin' element={<Signin />} />
           
            <Route path='/signin/homeinner' element={<Homeinner />}>
              <Route path='/signin/homeinner/founds' element={<Founds />} />
              <Route path='/signin/homeinner/losses' element={<Losses />} />
            </Route>
            </Route>
          <Route path='/login' element={<Login />}>
            <Route path='/login/homeinner' element={<Homeinner />}>
              <Route path='/login/homeinner/founds' element={<Founds />} />
              <Route path='/login/homeinner/losses' element={<Losses />} />
            </Route> </Route>

        </Route>

      </Routes>



    </div >
  );
}

export default App;


