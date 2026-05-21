import {
  FaUsers,
  FaPhone,
  FaVideo,
  FaCommentDots,
} from "react-icons/fa";

export default function SummaryCards() {
  const cards = [
    {
      title: "Total Friends",
      value: "8",
      icon: <FaUsers />,
    },
    {
      title: "Calls",
      value: "12",
      icon: <FaPhone />,
    },
    {
      title: "Video Chats",
      value: "5",
      icon: <FaVideo />,
    },
    {
      title: "Texts",
      value: "18",
      icon: <FaCommentDots />,
    },
  ];

  return (
    <section className="-mt-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="bg-green-100 text-green-700 p-4 rounded-xl text-2xl">
              {card.icon}
            </div>

            <div>
              <h3 className="text-gray-500 text-sm">
                {card.title}
              </h3>

              <p className="text-3xl font-bold">
                {card.value}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}