import './App.css';
import './styles/mystyle.css';
import Header from './component/header';
import Sidebar from './component/sidebar';
import Main from './component/main';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='row-two display'>
        <Sidebar />
        <Main />

      </div>

   
    </div>
  );
}

export default App;
