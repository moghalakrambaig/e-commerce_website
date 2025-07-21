import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './components/product/Product';
import NavigationBar from './components/navigation-bar/NavigationBar';
import HomePage from './pages/homepage/HomePage';


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
      <Route path="/" element={<>
        <NavigationBar />
        <HomePage /></>} />

      <Route path="/products" element={<>
        <NavigationBar />
        <Product />
      </>} />
    </Routes>
  );
}

export default App;