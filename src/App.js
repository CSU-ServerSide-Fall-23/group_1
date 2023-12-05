import './App.css';
import './Body.css';
import Body from './components/Body';
import CONFIG from './userConfig.json';

function App() {
  return (
    <div className="App vh-100" style={{'backgroundImage': `url(${CONFIG.backgroundImageURL})`}}>
      <Body/>
    </div>
  );
}

export default App;
