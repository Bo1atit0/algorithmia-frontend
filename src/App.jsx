import './App.css';
import ContributingSteps from './components/ContributingSteps';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="select-none">
      <Navbar />
      <Hero />
      <ContributingSteps />
    </main>
  );
}

export default App;
