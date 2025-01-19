import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Courses />
          <Stats />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;