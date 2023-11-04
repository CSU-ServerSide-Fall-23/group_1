import logo from './logo.svg';
import './App.css';
import './Body.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Nav
      />
      <Body>

      </Body>
      <Weather />
    </div>
  );
}

export default App;
