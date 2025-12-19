import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Clock, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1698653223689-24b0bfd5150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmd8ZW58MXx8fHwxNzY1MTEwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Chef cooking"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl mb-6">Our Story</h2>
            <p className="text-neutral-700 mb-4 text-lg">
              Founded in 2066, Manakamana has been serving
              exceptional cuisine to our community for over a
              two decades. Our passion for culinary excellence
              drives us to source the finest ingredients and
              create unforgettable dining experiences.
            </p>
            <p className="text-neutral-700 mb-6 text-lg">
              Led by Executive Chef Mitra Prasad Devkota, our
              team combines traditional techniques with modern
              innovation to bring you dishes that are both
              familiar and exciting.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                <div className="text-2xl mb-1">12+</div>
                <div className="text-neutral-600">Awards</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                <div className="text-2xl mb-1">25K+</div>
                <div className="text-neutral-600">
                  Happy Guests
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                <div className="text-2xl mb-1">16</div>
                <div className="text-neutral-600">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}