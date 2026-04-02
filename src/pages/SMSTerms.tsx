import { Link } from "react-router-dom";

export default function SMSTerms() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
            SMS Terms & Conditions
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            SMS Terms & Conditions – WFK Enterprise, LLC
          </h1>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <p>
              By opting into SMS from WFK Enterprise, LLC, you agree to receive
              text messages related to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>Service updates</li>
              <li>Appointment confirmations</li>
              <li>Customer support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Message Frequency
            </h2>
            <p>Message frequency may vary.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fees</h2>
            <p>
              Message and data rates may apply depending on your mobile carrier.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Opt-Out Instructions
            </h2>
            <p>You can opt out at any time by replying:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li>STOP – unsubscribe</li>
              <li>HELP – get assistance</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Privacy
            </h2>
            <p>
              Your information will be handled in accordance with our Privacy
              Policy:
            </p>
            <p className="mt-2 text-blue-600 hover:underline">
              <Link to="/privacy-policy" className="hover:underline">
                https://www.wfkenterprise.com/privacy-policy
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Sharing
            </h2>
            <p>
              We do not share or sell your phone number or SMS consent to third
              parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
