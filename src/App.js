import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className = "Main-App">
      <Header />
      <About />
      <Portfolio />
      </div>
    </div>
  );
}

export default App;
