import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className = "Main-App">
      <Header />
      <About />
      </div>
    </div>
  );
}

export default App;
