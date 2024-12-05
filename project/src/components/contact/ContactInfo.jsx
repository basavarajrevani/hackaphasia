import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Office</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <FaMapMarkerAlt className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <p className="text-gray-600">
              123 Education Street<br />
              Knowledge City<br />
              Country, 12345
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaPhone className="h-5 w-5 text-indigo-600" />
          <p className="ml-4 text-gray-600">+1-800-123-4567</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="h-5 w-5 text-indigo-600" />
          <p className="ml-4 text-gray-600">support@eduai.com</p>
        </div>
      </div>
    </div>
  );
}