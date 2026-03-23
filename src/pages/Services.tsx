import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Truck as TruckIcon } from "lucide-react";
import truckexpreince from "../assets/image/truckexpreince.png";
import mantruck from "../assets/image/mantruck.png";
import turckBg from "../assets/image/truck.png";
import drivers from "../assets/image/drivers.png";
import truckimg1 from "../assets/image/truckimg1.png";
import truckimg2 from "../assets/image/truckimg2.png";


// Scroll-triggered animation component
function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 overflow-hidden">
        <img
          src={turckBg}
          alt="WFK ENTERPRISE Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <ScrollReveal>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Services
              </h1>
              <p className="text-xl text-blue-600 font-semibold">
                Motivation Is The First Step To Success
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">LLC</h2>
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Downloads <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src={truckimg2}
                alt="Fleet of trucks"
                className="w-full rounded-lg shadow-xl"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-8">
              <ServiceDetail
                title="FTL"
                description="WFK ENTERPRISE provides a Full Truck Load Carrier service in the US across 48 States and 10+ City Metropolitan Areas. We operate a fleet of over 100+ Dry Van Trailers."
              />
              <ServiceDetail
                title="OTR"
                description="WFK ENTERPRISE provides fleet services as continental USA freight forwarding. We work in all 48 states of America."
              />
              <ServiceDetail
                title="Team Expedited"
                description="Team Expedited is an express, exclusive truck time-critical service to our team expedited shipping. With 100% of our fleet operated by trained drivers, we drive your freight reaches its destination faster and more efficiently."
              />
              <ServiceDetail
                title="Drop and Hook"
                description="WFK ENTERPRISE provides ready-to-move cargo with round-the-clock availability. We can provide trailer pools for shippers all across the US."
              />
              <ServiceDetail
                title="EDI Capable"
                description="EDI billing, load tendering and updates are all available. We can be set up to help manage higher-volume customers."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <img
              src={truckimg1}
              alt="WFK ENTERPRISE Truck"
              className="w-full rounded-lg shadow-2xl"
            />
          </ScrollReveal>
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
              image={mantruck}
              delay={0.2}
            />
            <ValueCard
              title="Reliability"
              description="Becoming a reliable company is the backbone of everything we do at WFK ENTERPRISE. We understand how much depends on us carrying out on our promises. We are satisfied with nothing provides that we cannot keep. We rely heavily on our reputation and we intend never to tarnish or destroy it in fashion."
              image={drivers}
              delay={0.4}
            />
            <ValueCard
              title="Experience"
              description="Our organization has brought in over success in transportation does not come overnight. It grows through experience. We have and pursue that learned and at each of our service channels, and embed these standards while every employee is truly in the finest traditions we have built year after year."
              image={truckexpreince}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <TruckIcon
            className="absolute top-10 right-10 w-96 h-96"
            strokeWidth={0.3}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
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
}: {
  title: string;
  description: string;
  image: string;
  delay: number;
}) {
  return (
    <ScrollReveal
      delay={delay}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
    >
      <div className="md:col-span-1">
        <img src={image} alt={title} className="w-full rounded-lg shadow-xl" />
      </div>
      <div className="md:col-span-2">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      </div>
    </ScrollReveal>
  );
}
