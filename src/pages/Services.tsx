import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck as TruckIcon } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="DM World Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Services</h1>
              <p className="text-xl text-blue-600 font-semibold">
                Motivation Is The First Step To Success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Transportation</h2>
            <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
              Downloads <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img
                src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fleet of trucks"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <ServiceDetail
                title="FTL"
                description="DM World provides a Full Truck Load Carrier service in the US across 48 States and 10+ City Metropolitan Areas. We operate a fleet of over 100+ Dry Van Trailers."
              />
              <ServiceDetail
                title="OTR"
                description="DM World provides fleet services as continental USA freight forwarding. We work in all 48 states of America."
              />
              <ServiceDetail
                title="Team Expedited"
                description="Team Expedited is an express, exclusive truck time-critical service to our team expedited shipping. With 100% of our fleet operated by trained drivers, we drive your freight reaches its destination faster and more efficiently."
              />
              <ServiceDetail
                title="Drop and Hook"
                description="DM World provides ready-to-move cargo with round-the-clock availability. We can provide trailer pools for shippers all across the US."
              />
              <ServiceDetail
                title="EDI Capable"
                description="EDI billing, load tendering and updates are all available. We can be set up to help manage higher-volume customers."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="DM World Truck"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black p-8 inline-block mb-12">
            <h2 className="text-3xl font-bold">What we do / How we do</h2>
          </div>

          <div className="space-y-8">
            <ValueCard
              title="Trust"
              description="We understand that in every way our customers are entrusting us much like we see to their drivers at every turn. We know we are trusted and we value that trust because we know it is why we trade with our customers. Our approach, as we got back in time, is really that simple."
              image="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay="200"
              isVisible={isVisible}
            />
            <ValueCard
              title="Reliability"
              description="Becoming a reliable company is the backbone of everything we do at DM World. We understand how much depends on us carrying out on our promises. We are satisfied with nothing provides that we cannot keep. We rely heavily on our reputation and we intend never to tarnish or destroy it in fashion."
              image="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay="400"
              isVisible={isVisible}
            />
            <ValueCard
              title="Experience"
              description="Our organization has brought in over success in transportation does not come overnight. It grows through experience. We have and pursue that learned and at each of our service channels, and embed these standards while every employee is truly in the finest traditions we have built year after year."
              image="https://images.pexels.com/photos/6169654/pexels-photo-6169654.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay="600"
              isVisible={isVisible}
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <TruckIcon className="absolute top-10 right-10 w-96 h-96" strokeWidth={0.3} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-6">Get a Quote</h2>
            <p className="text-xl mb-8">
              Simple: enter your Zip code to start the quoting process.
            </p>
            <Link
              to="/quote"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-xl"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ValueCard({
  title,
  description,
  image,
  delay,
  isVisible,
}: {
  title: string;
  description: string;
  image: string;
  delay: string;
  isVisible: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center transition-all duration-1000 delay-${delay} ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <div className="md:col-span-1">
        <img src={image} alt={title} className="w-full rounded-lg shadow-xl" />
      </div>
      <div className="md:col-span-2">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
}
