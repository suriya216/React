import './App.css';
import ColorChanger from './components/ColorChanger.js';
import MenuBar from './components/MenuBar.js';


function App() {
  return (
    <div className='mainContainer'>
      <MenuBar />
      <ColorChanger />
    </div>
  );
}

export default App;
