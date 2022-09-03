import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
