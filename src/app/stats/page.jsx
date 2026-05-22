"use client";

import { useTimeline } from "@/context/TimelineContext";

import AnalyticsChart from "@/components/AnalyticsChart";

export default function StatsPage() {
  const { timeline } = useTimeline();

  const callCount = timeline.filter(
    (item) => item.type === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.type === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "Video"
  ).length;

  const chartData = [
    {
      name: "Call",
      value: callCount,
    },
    {
      name: "Text",
      value: textCount,
    },
    {
      name: "Video",
      value: videoCount,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-4">
          Friendship Analytics
        </h1>

        <p className="text-gray-600">
          Visualize your communication habits with friends.
        </p>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-green-100 rounded-2xl p-8">
          <h3 className="text-lg text-green-700 mb-2">
            Calls
          </h3>

          <p className="text-5xl font-bold text-green-800">
            {callCount}
          </p>
        </div>

        <div className="bg-blue-100 rounded-2xl p-8">
          <h3 className="text-lg text-blue-700 mb-2">
            Texts
          </h3>

          <p className="text-5xl font-bold text-blue-800">
            {textCount}
          </p>
        </div>

        <div className="bg-purple-100 rounded-2xl p-8">
          <h3 className="text-lg text-purple-700 mb-2">
            Videos
          </h3>

          <p className="text-5xl font-bold text-purple-800">
            {videoCount}
          </p>
        </div>

      </div>

      {/* Chart */}
      <AnalyticsChart data={chartData} />

    </section>
  );
}