export default function ImpactMetric({ metric }) {
  return (
    <div className="text-center">
      <p className="text-5xl font-extrabold text-indigo-600">{metric.value}</p>
      <p className="mt-2 text-xl font-medium text-gray-500">{metric.label}</p>
    </div>
  );
}