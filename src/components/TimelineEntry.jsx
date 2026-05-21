export default function TimelineEntry({ date, title, description }) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
        <div className="w-1 h-20 bg-blue-200 mt-2"></div>
      </div>
      <div className="pb-8">
        <p className="text-sm text-gray-500">{date}</p>
        <h4 className="text-lg font-semibold text-gray-800 mt-1">{title}</h4>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
