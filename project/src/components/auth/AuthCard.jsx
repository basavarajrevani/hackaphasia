import { Link } from 'react-router-dom';

export default function AuthCard({ title, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link to="/" className="flex justify-center">
            <span className="text-3xl font-bold text-indigo-600">EduAI</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
        </div>
        {children}
        {footer && (
          <div className="text-sm text-center text-gray-600">{footer}</div>
        )}
      </div>
    </div>
  );
}