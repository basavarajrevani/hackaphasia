export const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    questions: [
      {
        id: 1,
        question: 'What is this platform about?',
        answer: 'We provide AI-powered educational resources to underserved communities, focusing on accessible and inclusive learning experiences.',
      },
      {
        id: 2,
        question: 'Is the platform free to use?',
        answer: 'Yes, our basic courses are free. Some advanced courses may require a small fee to cover operational costs.',
      },
      {
        id: 3,
        question: 'What languages are supported?',
        answer: 'We currently support English, Spanish, French, and Arabic, with more languages being added regularly.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Support',
    questions: [
      {
        id: 4,
        question: "Why can't I access my course?",
        answer: 'Ensure you are logged in and your internet connection is stable. If the issue persists, try clearing your browser cache.',
      },
      {
        id: 5,
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
      },
      {
        id: 6,
        question: 'What are the system requirements?',
        answer: 'Our platform works on any modern web browser. We recommend using Chrome, Firefox, or Safari for the best experience.',
      },
    ],
  },
  {
    id: 'courses',
    title: 'Course-related Queries',
    questions: [
      {
        id: 7,
        question: 'How do I enroll in a course?',
        answer: 'Go to the Courses page, select a course, and click "Enroll." You will need to create an account if you haven\'t already.',
      },
      {
        id: 8,
        question: 'Can I download course materials?',
        answer: 'Yes, most course materials are available for download once you are enrolled in the course.',
      },
      {
        id: 9,
        question: 'How long do I have access to a course?',
        answer: 'Once enrolled, you have lifetime access to the course materials.',
      },
    ],
  },
];

export const supportOptions = [
  {
    id: 'email',
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'support@eduai.com',
    icon: 'FaEnvelope',
  },
  {
    id: 'chat',
    title: 'Live Chat',
    description: 'Chat with our support team',
    availability: '24/7',
    icon: 'FaComments',
  },
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Talk to our support team',
    contact: '+1-800-123-4567',
    hours: 'Mon-Fri, 9 AM - 6 PM',
    icon: 'FaPhone',
  },
];