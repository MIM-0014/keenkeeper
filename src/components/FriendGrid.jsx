import friends from "@/data/friends.json";
import FriendCard from "./FriendCard";

export default function FriendsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-10">
        <h2 className="text-4xl font-bold mb-3">
          Your Friends
        </h2>

        <p className="text-gray-600">
          Stay connected with the people who matter most.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
          />
        ))}
      </div>

    </section>
  );
}