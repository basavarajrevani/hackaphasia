import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import FormInput from '../components/auth/FormInput';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy signup logic
    console.log('Signup attempt:', formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <AuthCard 
      title="Create your account"
      footer={
        <p>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      }
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <FormInput
            id="name"
            label="Full name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            id="email"
            label="Email address"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <FormInput
            id="confirmPassword"
            label="Confirm password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create account
          </button>
        </div>
      </form>
    </AuthCard>
  );
}