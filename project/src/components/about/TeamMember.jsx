export default function TeamMember({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-indigo-600 mb-2">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
}