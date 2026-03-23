import { useEffect, useState } from 'react';

import trucks from "../assets/image/trucks.png";


export default function News() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className={`text-5xl font-bold text-gray-900 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          News
        </h1>

        <div className="space-y-16">
          <article className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              CALIFORNIA JUDGE RULES AB5 VIOLATES F4A
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              Ruling Seen As Major Victory For Trucking Companies & Transportation Industry
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>JANUARY 10, 2020</strong> – ALEXANDRIA, VA – In a huge victory for
                trucking companies and the transportation industry, Los Angeles Superior Court
                Judge Rolf Treu held this week that California Assembly Bill 5 (AB5) is likely
                preempted by federal law. In his ruling, Judge Highberger wrote that the statute
                (and the Supreme Court decision it reflects) "clearly\" runs afoul of the Federal
                Aviation Administrative Authorization Act of F4A, which prohibits States from
                enacting or enforcing policies related to "price, route, or service of any motor
                carrier."
              </p>

              <p>
                The State of New Jersey is in the midst of enacting its own law similar to AB5,
                and this decision will potentially have a positive impact on New Jersey and on
                many other additional States that attempt to shift away from the independent
                contractor model.
              </p>

              <p>
                The law, which took effect January 1, 2020, broadly directs companies to
                categorize many of their workers as employees rather than independent contractors.
                Several companies and industry trade associations have sued to block the law or
                limit its scope, including trucking groups that warn the law would be devastating
                to drivers who own and operate their vehicles.
              </p>

              <p>
                The relationship between 3PLs and independent contractors is considered by many
                industry experts as a gray area because our Members simply "arrange" for the
                motor carrier to be the party operating under the B "prong" of the ABC test (the
                person performs work that is outside the usual course of the hiring entity's
                business). Specifically, the motor carrier would be transporting and the 3PL would
                be arranging.
              </p>

              <p>
                TIA is still monitoring the law to gauge the impact on Member companies that
                utilize the "agent-based model" and have independent contractors in the State of
                California. TIA Government Affairs staff will continue to monitor the situation
                and report any new developments.
              </p>

              <p>
                If you have any questions, please contact TIA Advocacy at advocacy@tianet.org or
                703.299.5700.
              </p>
            </div>
          </article>

          <article className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <img
                src={trucks}
                alt="SmartWay"
                className="w-64 h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              SMARTWAY Partner PRESS RELEASE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-700 mb-2">For Immediate Release</p>
                <p className="text-gray-700 mb-4">11.19.2019</p>
                <p className="text-gray-700 mb-2">
                  WFK ENTERPRISE LLC <strong>Joins U.S. EPA SmartWay® Transport Partnership</strong>
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-700">Contact: Igor Coleastru</p>
                <p className="text-gray-700">407-802-4146 (ext.5556)</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>[Orlando, Florida]</strong> – WFK ENTERPRISE LLC today announced
                that it joined the SmartWay® Transport Partnership, an innovative collaboration
                between U.S. Environmental Protection Agency (EPA) and industry that provides a
                framework to assess the environmental and energy efficiency of goods movement
                supply chains.
              </p>

              <p>
                <strong>WFK ENTERPRISE LLC</strong> will contribute to the Partnership's
                savings of 279.7 million barrels of oil, $37.5 billion in fuel costs and 134
                million tons of air pollutants. This is equivalent to eliminating annual energy
                use in over 18.2 million homes. By joining SmartWay Transport Partnership,{' '}
                <strong>WFK ENTERPRISE LLC</strong> demonstrates its strong commitment to
                environmental stewardship and corporate social responsibility.
              </p>

              <p>
                It is our goal to focus on providing the best service possible by creating long
                lasting and respectful relationships with our customers. Our mission statement{' '}
                <em>"Improving our world, one mile at a time"</em> reaffirms that WFK ENTERPRISE
                Transportation is looking forward to helping achieve our goals as a responsible
                carrier and is in line with EPA priorities.
              </p>

              <p>
                Developed jointly in early 2003 by EPA and Charter Partners represented by
                industry stakeholders, environmental groups, American Trucking Associations, and
                other Business for Social Responsibility, this innovative program was launched in
                2004. Partners rely upon SmartWay tools and approaches to track and reduce
                emissions and fuel use from goods movement.
              </p>

              <p>
                The Partnership currently has over 3,000 Partners including shipper, logistics
                companies, truck, rail, barge, and multimodal carriers.
              </p>

              <p>
                Becoming a reliable and environmentally sensitive carrier is the backbone of
                everything we do at DM. As a carrier we rely on our reputation to provide quality
                service in the most efficient way. For information about the SmartWay Transport
                Partnership visit www.epa.gov/smartway.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
