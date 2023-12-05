import './App.css';
import './Body.css';
import Nav from './components/Nav';
import Body from './components/Body';
import CONFIG from './userConfig.json';

function App() {
  return (
    <div className="App vh-100" style={CONFIG.backgroundImage && {'backgroundImage': `url(${CONFIG.backgroundImageURL})`}}>

      <Body/>
    </div>
  );
}

export default App;
