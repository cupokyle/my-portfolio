import './App.scss';
import Header from './Components/Header.js';
import Projects from './Components/Projects.js';
import Hiring from './Components/Hiring.js';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Projects />
      <Hiring />
    </div>
  );
}

export default App;
