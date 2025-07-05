import './App.css';
import Navigation from './components/navigation-bar/NavigationBar';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;