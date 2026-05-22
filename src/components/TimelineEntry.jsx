import {
  FaPhone,
  FaCommentDots,
  FaVideo,
} from "react-icons/fa";

export default function TimelineEntry({ item }) {
  const icons = {
    Call: <FaPhone className="text-green-600" />,
    Text: <FaCommentDots className="text-blue-600" />,
    Video: <FaVideo className="text-purple-600" />,
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">

      {/* Icon */}
      <div className="text-2xl bg-gray-100 p-4 rounded-full">
        {icons[item.type]}
      </div>

      {/* Content */}
      <div className="flex-1">

        <h3 className="text-xl font-semibold mb-1">
          {item.title}
        </h3>

        <p className="text-gray-500">
          📅 {item.date}
        </p>

      </div>

    </div>
  );
}