import { Link } from 'react-router-dom';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          We're here to help. Reach out to us anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div>
          <ContactInfo />
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Follow us for updates
        </h3>
        <SocialLinks />
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Need immediate assistance?
        </h3>
        <Link
          to="/support"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Go to Support
        </Link>
      </div>
    </div>
  );
}