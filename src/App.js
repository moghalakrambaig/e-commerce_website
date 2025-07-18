import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/product/Product';


function App() {
  return (
    // <div className="App">
    //   <Navigation />
    //   <div>
    //     {/* <HomePage /> */}
    //     <Product />
    //   </div>
    // </div>
    <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
  );
}

export default App;