import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChefHat } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2NTAxNzMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-white">
          <ChefHat className="w-8 h-8" />
          <span className="text-2xl">Manakamana Restaurant</span>
        </div>
        <div className="hidden md:flex gap-8 text-white">
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-88px)] text-center px-4">
        <h1 className="text-white text-6xl md:text-7xl mb-6">Authentic Flavors & Divine Hospitality</h1>
        <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl">
          Experience traditional Nepali cuisine at its finest
        </p>
        <div className="flex gap-4">
          <a 
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md transition-colors"
          >
            View Menu
          </a>
          <a 
            href="#contact"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md backdrop-blur-sm transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}