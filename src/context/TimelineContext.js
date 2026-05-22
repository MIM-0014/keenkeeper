"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTimeline = localStorage.getItem("timeline");
      return savedTimeline ? JSON.parse(savedTimeline) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "timeline",
      JSON.stringify(timeline)
    );
  }, [timeline]);

  const addTimelineEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newEvent, ...prev]);
  };

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addTimelineEvent,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}