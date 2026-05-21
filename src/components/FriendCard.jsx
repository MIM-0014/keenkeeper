import Link from 'next/link';
import Image from 'next/image';

export default function FriendCard({ friend }) {
  const statusColors = {
    overdue: 'bg-red-100 text-red-800',
    'almost due': 'bg-yellow-100 text-yellow-800',
    'on-track': 'bg-green-100 text-green-800',
  };

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[friend.status] || 'bg-gray-100 text-gray-800'}`}>
            {friend.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{friend.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{friend.email}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{friend.bio}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Last contact: {friend.days_since_contact} days ago</span>
          <span className="text-blue-600 font-semibold">Goal: {friend.goal} days</span>
        </div>
      </div>
    </Link>
  );
}
