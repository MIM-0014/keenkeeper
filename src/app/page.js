'use client';

import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import FriendGrid from '@/components/FriendGrid';
import SummaryCard from '@/components/SummaryCard';
import friendsData from '@/data/friends.json';

export default function HomePage() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setFriends(friendsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  const overdueCount = friends.filter(f => f.status === 'overdue').length;
  const onTrackCount = friends.filter(f => f.status === 'on-track').length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Banner />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SummaryCard title="Overdue" count={overdueCount} type="overdue" />
          <SummaryCard title="On Track" count={onTrackCount} type="on-track" />
        </div>
        <FriendGrid friends={friends} />
      </div>
    </main>
  );
}