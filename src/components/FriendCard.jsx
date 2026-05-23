import Link from "next/link";

export default function FriendCard({ friend }) {
  const statusColors = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-700",
    "on-track": "bg-green-100 text-green-700",
  };

  return (
   <Link href={`/friend?id=${friend.id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer group">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Name */}
          <h2 className="text-2xl font-bold mb-2">
            {friend.name}
          </h2>

          {/* Days */}
          <p className="text-gray-600 mb-4">
            📅 {friend.days_since_contact} days since contact
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Status */}
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[friend.status]}`}
          >
            {friend.status}
          </span>

        </div>
      </div>
    </Link>
  );
}