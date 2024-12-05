import { FaEnvelope, FaComments, FaPhone } from 'react-icons/fa';

const icons = {
  FaEnvelope,
  FaComments,
  FaPhone,
};

export default function SupportOption({ option }) {
  const Icon = icons[option.icon];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 rounded-full p-3">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="ml-4 text-xl font-medium text-gray-900">{option.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{option.description}</p>
      {option.contact && (
        <p className="text-indigo-600 font-medium">{option.contact}</p>
      )}
      {option.hours && (
        <p className="text-sm text-gray-500">{option.hours}</p>
      )}
      {option.id === 'chat' && (
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          Start Chat
        </button>
      )}
    </div>
  );
}