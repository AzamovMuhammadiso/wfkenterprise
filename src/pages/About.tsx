import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mansur",
      role: "Fleet Department",
      image:
        "https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "I love working here. My employees are great to work with and are always on your side. I feel like I'm a very valued employee here and what I do really matters to DM World. Very friendly environment. I love it here!",
    },
  ];

  const regions = [
    { name: "Alabama", column: 0 },
    { name: "Arizona", column: 0 },
    { name: "Arkansas", column: 0 },
    { name: "California", column: 0 },
    { name: "Colorado", column: 0 },
    { name: "Connecticut", column: 0 },
    { name: "Delaware", column: 0 },
    { name: "Florida", column: 0 },
    { name: "Georgia", column: 0 },
    { name: "Hawaii", column: 0 },
    { name: "Idaho", column: 0 },
    { name: "Illinois", column: 0 },
    { name: "Indiana", column: 0 },
    { name: "Kansas", column: 1 },
    { name: "Kentucky", column: 1 },
    { name: "Louisiana", column: 1 },
    { name: "Maine", column: 1 },
    { name: "Maryland", column: 1 },
    { name: "Massachusetts", column: 1 },
    { name: "Michigan", column: 1 },
    { name: "Minnesota", column: 1 },
    { name: "Mississippi", column: 1 },
    { name: "Missouri", column: 1 },
    { name: "Montana", column: 1 },
    { name: "Nebraska", column: 1 },
    { name: "Nevada", column: 1 },
    { name: "New Jersey", column: 2 },
    { name: "New Mexico", column: 2 },
    { name: "New York", column: 2 },
    { name: "North Carolina", column: 2 },
    { name: "North Dakota", column: 2 },
    { name: "Ohio", column: 2 },
    { name: "Oklahoma", column: 2 },
    { name: "Oregon", column: 2 },
    { name: "Pennsylvania", column: 2 },
    { name: "Rhode Island", column: 2 },
    { name: "South Carolina", column: 2 },
    { name: "South Dakota", column: 2 },
    { name: "Tennessee", column: 2 },
    { name: "Utah", column: 3 },
    { name: "Vermont", column: 3 },
    { name: "Virginia", column: 3 },
    { name: "Washington", column: 3 },
    { name: "West Virginia", column: 3 },
    { name: "Wisconsin", column: 3 },
    { name: "Wyoming", column: 3 },
  ];

  const groupedRegions = [
    regions.filter((r) => r.column === 0),
    regions.filter((r) => r.column === 1),
    regions.filter((r) => r.column === 2),
    regions.filter((r) => r.column === 3),
  ];

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
            <ScrollReveal>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                About Us
              </h1>
              <p className="text-xl text-blue-600 font-semibold">
                Motivation Is The First Step To Success
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Owner</h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                Charles Miles Havelka
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Charles began his career in 1957 after completing truck
                  driving school in Chicago. He started out as a driver for
                  Schneider National Carriers and has since accumulated a vast
                  range of experience across various types of transportation,
                  including dry vans, ocean containers, refrigerated vans,
                  flatbeds, and tankers. He maintains his commercial driver's
                  license (CDL) and continues to be active in the industry.
                </p>
                <p>
                  In 2008, Charles founded his first trucking company,
                  specializing in loading and unloading airplanes at O'Hare
                  Airport in Chicago and in 2022 Charles acquired DM World
                  Transportation LLC. With his extensive experience and
                  knowledge, Charles is now focused on growing the business and
                  better transportation services through his company.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Charles Miles Havelka"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-gray-900 text-white p-8 inline-block mb-12">
            <h2 className="text-3xl font-bold">Testimonials</h2>
          </ScrollReveal>

          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-blue-600">Reviews</h3>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="bg-gray-800 p-8 flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-64 h-64 object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name} –{" "}
                    {testimonials[currentTestimonial].role}
                  </h4>
                  <div className="my-6">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      {testimonials[currentTestimonial].quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        setCurrentTestimonial((prev) =>
                          prev === 0 ? testimonials.length - 1 : prev - 1,
                        )
                      }
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="text-gray-600 font-medium">Next</span>
                    <button
                      onClick={() =>
                        setCurrentTestimonial((prev) =>
                          prev === testimonials.length - 1 ? 0 : prev + 1,
                        )
                      }
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-gray-900 text-white p-8 inline-block mb-12">
            <h2 className="text-3xl font-bold">Regions where we are active</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {groupedRegions.map((column, columnIndex) => (
              <ScrollReveal
                key={columnIndex}
                delay={columnIndex * 0.1}
                className="space-y-3"
              >
                {column.map((region, index) => (
                  <div
                    key={region.name}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{region.name}</span>
                  </div>
                ))}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
