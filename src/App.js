import logo from './logo.svg';
import './App.css';
import { AcademicCapIcon } from '@heroicons/react/solid'
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <h1 className='text-center my-4 welcome'>Welcome To Our BeautyShop</h1>
      <Products></Products>
      <div className="questionAndAnswer container">
        <h2 class="text-center mb-3">Question And Answer</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3">Q1: Props vs State</h5>
                      <p class="card-text"> Props and State Main difference is props just read only. We can't change props data. but We can change data and update data using State. we can transfer data one component to another component and receive this data using Props.</p>
                    </div>
                  </div>
          </div>
          <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3">Q2: How react works</h5>
                      <p class="card-text">React at first create Virtual dom. then when I'll any changes, then react create new virtual dom and compare old virtual dom and new created virtual dom data and update virtual dom. React is one way binding. react works just top to bottom. not allow react lift up. like if we will try to transfer data bottom to top, then not allow react. just allow top to bottom.</p>
                    </div>
                  </div>
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default App;
