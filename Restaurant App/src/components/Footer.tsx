import { ChefHat, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8" />
              <span className="text-2xl">Manakamana Restaurant</span>
            </div>
            <p className="text-neutral-400">
              Experience authentic Nepali cuisine with divine hospitality.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Hours</h3>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Tue - Thu: 5:00 PM - 10:00 PM</div>
                  <div>Fri - Sat: 5:00 PM - 11:00 PM</div>
                  <div>Sun: 4:00 PM - 9:00 PM</div>
                  <div>Monday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Location</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Culinary Avenue<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@savoria.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>&copy; 2024 Manakamana Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}