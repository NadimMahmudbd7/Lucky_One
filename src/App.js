import logo from './logo.svg';
import './App.css';
import { AcademicCapIcon } from '@heroicons/react/solid'
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <h1 className='text-center my-4'>Beauty Shop</h1>
      <Products></Products>
      <div className="questionAndAnswer container">
        <h2 class="text-center mb-3">Question And Answer</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3">Q1: how does javascript work</h5>
                      <p class="card-text">JavaScript at a time can execute only one script. thatmean's when we will open website, then javascript execute one by one script top to bottom, so javascript called JavaScript is a single-threaded language. normal function we can call any position, like top to bottom but arrow function just work just where declear arrow function and call this arrow only down to the declear arrow function.</p>
                    </div>
                  </div>
          </div>
          <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3">Q1: how does javascript work</h5>
                      <p class="card-text">JavaScript at a time can execute only one script. thatmean's when we will open website, then javascript execute one by one script top to bottom, so javascript called JavaScript is a single-threaded language. normal function we can call any position, like top to bottom but arrow function just work just where declear arrow function and call this arrow only down to the declear arrow function.</p>
                    </div>
                  </div>
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default App;
