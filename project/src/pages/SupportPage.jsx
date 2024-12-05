import { useState } from 'react';
import { faqCategories, supportOptions } from '../data/faq';
import FAQSection from '../components/support/FAQSection';
import SupportOption from '../components/support/SupportOption';
import { FaSearch } from 'react-icons/fa';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How can we help you?
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Find answers to your questions or get in touch with our support team
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs or support topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {supportOptions.map((option) => (
          <SupportOption key={option.id} option={option} />
        ))}
      </div>

      {/* FAQ Sections */}
      <div className="space-y-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        {faqCategories.map((category) => (
          <FAQSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}