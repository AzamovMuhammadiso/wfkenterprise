export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Privacy Policy – WFK Enterprise, LLC
          </h1>
          <p className="mt-3 text-gray-600">Effective Date: 20.02.2020</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <p>
            WFK Enterprise, LLC (“we,” “our,” or “us”) respects your privacy and
            is committed to protecting your personal information.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Any information submitted through our website forms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>Provide services</li>
              <li>Communicate with customers</li>
              <li>Send updates and respond to inquiries</li>
              <li>Send SMS communications (if consent is provided)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              SMS Communication & Consent
            </h2>
            <p>
              By providing your phone number, you consent to receive SMS
              messages from WFK Enterprise, LLC.
            </p>
            <p>These messages may include:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
              <li>Service updates</li>
              <li>Appointment notifications</li>
              <li>Customer support responses</li>
            </ul>
            <p>Message frequency may vary. Message and data rates may apply.</p>
            <p>Reply STOP to unsubscribe.</p>
            <p>Reply HELP for assistance.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Sharing & Protection
            </h2>
            <p>
              We do NOT sell, rent, or share your personal information,
              including phone numbers or SMS consent, with third parties or
              affiliates for marketing purposes.
            </p>
            <p>
              Your information is used strictly for business communication and
              service-related purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p>
              You may request access, updates, or deletion of your information
              by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>WFK Enterprise, LLC</p>
              <p>
                Website:
                <a
                  href="https://www.wfkenterprise.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.wfkenterprise.com
                </a>
              </p>
              <p>
                Email:
                <a
                  href="mailto:info@wfkenterprise.com"
                  className="text-blue-600 hover:underline"
                >
                  info@wfkenterprise.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
