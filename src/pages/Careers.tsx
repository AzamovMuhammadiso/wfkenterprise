import { useEffect, useState } from "react";
import turckBg from "../assets/image/truck.png";
import drivers from "../assets/image/dirvers.png";
import driver1 from "../assets/image/driver1.png";
import driver2 from "../assets/image/driver2.png";
import driver3 from "../assets/image/driver3.png";

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"drivers" | "office">("drivers");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-96 overflow-hidden">
        <img
          src={turckBg}
          alt="WFK ENTERPRISE Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h1 className="text-6xl font-bold text-gray-900 mb-4">Careers</h1>
              <p className="text-2xl text-blue-600 font-semibold">
                Professional and Hire Categories
              </p>
              <div className="w-20 h-1 bg-blue-500 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 mb-12 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab("drivers")}
              className={`text-xl font-semibold pb-4 transition-all ${
                activeTab === "drivers"
                  ? "text-blue-600 border-b-4 border-blue-600 -mb-0.5"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Drivers
            </button>
            <button
              onClick={() => setActiveTab("office")}
              className={`text-xl font-semibold pb-4 transition-all ${
                activeTab === "office"
                  ? "text-blue-600 border-b-4 border-blue-600 -mb-0.5"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Office
            </button>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <CareerCard image={driver1} delay="200" isVisible={isVisible} />
            <CareerCard image={driver2} delay="400" isVisible={isVisible} />
            <CareerCard image={driver3} delay="600" isVisible={isVisible} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <img
                src={drivers}
                alt="Career opportunity"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Working at WFK ENTERPRISE
              </h2>
              <p className="text-xl text-gray-700 mb-4 italic">
                To win the long run one day, at a time
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We make an unwavering commitment to our drivers and staff so
                they feel appreciated for the contributions they make every day
                to our country. They are the daily ambassadors of our services
                across the world.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg shadow-lg">
                View Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              At WFK ENTERPRISE Transportation, we're always looking for
              talented individuals who share our commitment to excellence and
              customer service. Whether you're an experienced driver or looking
              for an office position, we offer competitive compensation,
              excellent benefits, and a supportive work environment.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:careers@dmwtrans.com"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CareerCard({
  image,
  delay,
  isVisible,
}: {
  image: string;
  delay: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-xl transition-all duration-1000 delay-${delay} hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="aspect-square">
        <img
          src={image}
          alt="Career opportunity"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
