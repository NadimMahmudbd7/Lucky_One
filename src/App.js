import logo from './logo.svg';
import './App.css';
import { AcademicCapIcon } from '@heroicons/react/solid'
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <h1 className='text-center my-4'>Beauty Shop</h1>
      <Products></Products>
    </div>
  );
}

export default App;
