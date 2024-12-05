import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <FaChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <FaChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ category }) {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleToggle = (questionId) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
      <div className="space-y-2">
        {category.questions.map((item) => (
          <FAQItem
            key={item.id}
            {...item}
            isOpen={openQuestionId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}