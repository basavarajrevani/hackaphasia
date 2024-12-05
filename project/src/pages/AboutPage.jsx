import { Link } from 'react-router-dom';
import { teamMembers, impactMetrics } from '../data/team';
import TeamMember from '../components/about/TeamMember';
import ImpactMetric from '../components/about/ImpactMetric';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            To provide localized, accessible, and inclusive education to underprivileged communities
            using AI-powered tools. Aligned with SDG 4, 8, and 10, we aim to reduce inequalities
            and empower marginalized groups through skill development.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric) => (
            <ImpactMetric key={metric.label} metric={metric} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Join us in transforming education for the underserved
          </h2>
          <Link
            to="/signup"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}