import friends from "@/data/friends.json";

import FriendDetailsClient from "@/components/FriendDetailsClient";

export async function generateStaticParams() {
  return friends.map((friend) => ({
    id: friend.id.toString(),
  }));
}

export default function FriendDetailsPage({ params }) {
  const friend = friends.find(
    (f) => f.id === parseInt(params.id)
  );

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Friend not found
      </div>
    );
  }

  return <FriendDetailsClient friend={friend} />;
}