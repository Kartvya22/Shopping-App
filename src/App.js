
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center mx-auto gap-16 max-w-7xl">
      <div className='fixed z-10 left-0 top-0 h-12 w-full bg-slate-300 '>
        <Navbar/>
      </div>
      <div className='my-12 z-0 w-full'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
