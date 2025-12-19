import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}