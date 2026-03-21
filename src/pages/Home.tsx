import { Link } from "react-router-dom";
import {
  Truck as TruckIcon,
  Users,
  Clock,
  BarChart3,
  Headphones as HeadphonesIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ScrollReveal>
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <path
                d="M100 300 L150 280 L150 250 L200 250 L200 280 L250 280 L250 200 L400 200 L400 280 L700 280 L700 320 L400 320 L400 400 L250 400 L250 320 L200 320 L200 350 L150 350 L150 320 L100 340 Z"
                fill="currentColor"
              />
            </svg>
          </ScrollReveal>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl">
                <h1 className="text-4xl font-bold mb-4 leading-tight">
                  Improving our world, one mile at a time.
                </h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TruckIcon
                className="w-full h-64 text-blue-300 opacity-50"
                strokeWidth={0.5}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                At WFK World
              </h2>
              <p className="text-gray-600 mb-6">
                Every mile counts, every delivery counts, and every one of our
                employees count.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <TruckIcon className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Single Day
                    </h3>
                    <p className="text-sm text-gray-600">
                      We have been providing OTR services for over 15 years, We
                      are proudly providing a no-nonsense approach to smart
                      travel and transportation.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gray-900 text-white p-8 inline-block mb-8">
              <h2 className="text-3xl font-bold">Services Offered</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <ServiceItem title="FTL: Full Truck Load" />
                <ServiceItem title="OTR: Over The Road" />
                <ServiceItem title="Team Expedited" />
                <ServiceItem title="Drop and Hook" />
                <ServiceItem title="Double Puls" />
                <ServiceItem title="EDI Capable" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TruckIcon
                className="w-full h-64 text-gray-300"
                strokeWidth={0.5}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-black p-8 inline-block mb-12">
              <h2 className="text-3xl font-bold">Why WFK ENTERPRISE</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Experienced Specialists"
              image="https://images.pexels.com/photos/7363181/pexels-photo-7363181.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay={0.2}
            />
            <FeatureCard
              icon={<Clock className="w-12 h-12" />}
              title="Delivery Anytime"
              image="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay={0.4}
            />
            <FeatureCard
              icon={<BarChart3 className="w-12 h-12" />}
              title="Easy Order Management"
              image="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay={0.6}
            />
            <FeatureCard
              icon={<HeadphonesIcon className="w-12 h-12" />}
              title="24/7 Customer Support"
              image="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
              delay={0.8}
            />
          </div>

          <ScrollReveal delay={1}>
            <p className="text-center mt-12 text-gray-300">
              Our integrated suppliers take the guesswork out so you can get
              back to business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gray-900 text-white p-8 inline-block mb-12">
              <h2 className="text-3xl font-bold">Our Gallery</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <GalleryImage
              src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 1"
              className="col-span-2 row-span-2"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 2"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 3"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169677/pexels-photo-6169677.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 4"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169639/pexels-photo-6169639.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 5"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169654/pexels-photo-6169654.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 6"
            />
            <GalleryImage
              src="https://images.pexels.com/photos/6169649/pexels-photo-6169649.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Truck 7"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="bg-gray-900 text-white p-8 inline-block mb-6">
                <h2 className="text-3xl font-bold">Explore Careers</h2>
              </div>
              <div className="flex space-x-4 mb-8">
                <button className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-2">
                  Drivers
                </button>
                <button className="text-gray-600 font-semibold pb-2 hover:text-blue-500">
                  Owners
                </button>
              </div>
              <ScrollReveal delay={0.2}>
                <img
                  src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Career"
                  className="rounded-lg shadow-lg"
                />
              </ScrollReveal>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Working at WFK ENTERPRISE
              </h3>
              <p className="text-gray-600 mb-4">
                To win the long run one day, at a time
              </p>
              <p className="text-gray-600 mb-6">
                We make an unwavering commitment to our drivers and staff so
                they feel appreciated for the contributions they make every day
                to our country. They are the daily ambassadors of our services
                across the world.
              </p>
              <Link
                to="/careers"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition-colors"
              >
                View Positions
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceItem({ title }: { title: string }) {
  return (
    <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 transition-colors">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <span className="font-medium">{title}</span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  image,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  image: string;
  delay: number;
}) {
  return (
    <ScrollReveal
      delay={delay}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:scale-105"
    >
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-blue-400">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </ScrollReveal>
  );
}

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <ScrollReveal
      className={`relative overflow-hidden rounded-lg group ${className}`}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </motion.div>
    </ScrollReveal>
  );
}
