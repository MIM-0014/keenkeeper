import FriendCard from './FriendCard';

export default function FriendGrid({ friends }) {
  if (!friends || friends.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No friends to display.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
