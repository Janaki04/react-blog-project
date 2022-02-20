
import './App.css';
import Bollywood from './Component/Bollywood';
import { Provider } from './Component/Createcontext';
import Header from './Component/Header';
import Hollywood from './Component/Hollywood';
import Technology from './Component/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Component/Home';
import Information from './Component/Information';
import Travel from './Component/Travel';
import Food from './Component/Food';



function App() {
  return (
    <Provider>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='/bollywood' element={<Bollywood />} />

          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/travel' element={<Travel/>}/>

          <Route path='/technology' element={<Technology />} />
          <Route path='/food' element={<Food/>}/>
          <Route path='/category' element={<Information/>}>
            <Route path=':id' element={<Information/>}/>
          </Route>


        </Routes>
       


      </Router>

    </div>
    </Provider>
  );

}

export default App;
