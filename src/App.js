import './App.css';
import Navigation from './components/navigation-bar/NavigationBar';
import Product from './components/product/Product';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
    </div>
  );
}

export default App;