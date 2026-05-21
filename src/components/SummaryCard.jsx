export default function SummaryCard({ title, count, type }) {
  const bgColor = type === 'overdue' ? 'bg-red-50' : 'bg-green-50';
  const textColor = type === 'overdue' ? 'text-red-700' : 'text-green-700';
  const borderColor = type === 'overdue' ? 'border-red-200' : 'border-green-200';

  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-lg p-6`}>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className={`text-4xl font-bold ${textColor}`}>{count}</p>
    </div>
  );
}
