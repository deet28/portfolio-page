import './styles/App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className = "Main-App">
      <Header />
      <About />
      <Portfolio/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
