"use client";

import { useState } from "react";

import { useTimeline } from "@/context/TimelineContext";

import TimelineEntry from "@/components/TimelineEntry";

export default function TimelinePage() {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(
          (item) => item.type === filter
        );

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Timeline
        </h1>

        <p className="text-gray-600">
          Track all your friendship interactions.
        </p>

      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10">

        {["All", "Call", "Text", "Video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-xl font-medium transition
              
              ${
                filter === type
                  ? "bg-[#244d3f] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {type}
          </button>
        ))}

      </div>

      {/* Timeline List */}
      <div className="space-y-6">

        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((item) => (
            <TimelineEntry
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h2 className="text-2xl font-bold mb-3">
              No timeline entries found
            </h2>

            <p className="text-gray-500">
              Start interacting with your friends to see activity here.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}