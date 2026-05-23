"use client";

import { useParams } from "next/navigation";

import friends from "@/data/friends.json";

import {
  FaPhone,
  FaCommentDots,
  FaVideo,
  FaClock,
  FaArchive,
  FaTrash,
} from "react-icons/fa";

import toast from "react-hot-toast";



import { useTimeline } from "@/context/TimelineContext";

export default function FriendDetailsPage() {
  const params = useParams();

  const id = parseInt(params.id);

  const friend = friends.find(
    (f) => f.id === id
  );

  const { addTimelineEvent } = useTimeline();

 if (!params?.id) {
  return null;
}

if (!friend) {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
      Friend not found
    </div>
  );
}
  const statusColors = {
    overdue: "bg-red-100 text-red-600",
    "almost due": "bg-yellow-100 text-yellow-700",
    "on-track": "bg-green-100 text-green-700",
  };

  const handleInteraction = (type) => {
    addTimelineEvent(type, friend.name);

    toast.success(`${type} logged successfully`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
          />

          <h1 className="text-3xl font-bold text-center mb-3">
            {friend.name}
          </h1>

          <div className="text-center mb-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[friend.status]}`}
            >
              {friend.status}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-center mb-6">
            {friend.bio}
          </p>

          <p className="text-center mb-8 font-medium">
            {friend.email}
          </p>

          <div className="space-y-4">

            <button className="w-full flex items-center justify-center gap-2 bg-yellow-100 text-yellow-700 py-3 rounded-xl font-medium">
              <FaClock />
              Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-blue-100 text-blue-700 py-3 rounded-xl font-medium">
              <FaArchive />
              Archive
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-700 py-3 rounded-xl font-medium">
              <FaTrash />
              Delete
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="lg:col-span-2 space-y-8">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 mb-2">
                Days Since Contact
              </h3>

              <p className="text-4xl font-bold">
                {friend.days_since_contact}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 mb-2">
                Goal
              </h3>

              <p className="text-4xl font-bold">
                {friend.goal} Days
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 mb-2">
                Next Due Date
              </h3>

              <p className="text-2xl font-bold">
                {friend.next_due_date}
              </p>
            </div>

          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              Quick Check-In
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <button
                onClick={() => handleInteraction("Call")}
                className="bg-green-100 text-green-700 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
              >
                <FaPhone />
                Call
              </button>

              <button
                onClick={() => handleInteraction("Text")}
                className="bg-blue-100 text-blue-700 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
              >
                <FaCommentDots />
                Text
              </button>

              <button
                onClick={() => handleInteraction("Video")}
                className="bg-purple-100 text-purple-700 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
              >
                <FaVideo />
                Video
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}